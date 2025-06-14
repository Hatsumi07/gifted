import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import { students } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedStudents() {
  await sql`DROP TABLE IF EXISTS students CASCADE;`;
  await sql`
    CREATE TABLE IF NOT EXISTS students (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedStudents = await Promise.all(
    students.map(async (student) => {
      const hashedPassword = await bcrypt.hash(student.password, 10);
      return sql`
        INSERT INTO users (name, email, password, image_url)
        VALUES (${student.name}, ${student.email}, ${hashedPassword}, ${student.image_url})
        ON CONFLICT (email) DO NOTHING;
      `;
    }),
  );

  return insertedStudents;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedStudents(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
