import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listStudents() {
	const data = await sql`
    SELECT students.name, students.email
    FROM students
  `;

	return data;
}

export async function GET() {
  try {
  	return Response.json(await listStudents());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
