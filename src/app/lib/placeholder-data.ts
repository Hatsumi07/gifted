// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Student',
    email: 'student@nextmail.com',
    password: '123456',
    image_url: '/users/user.png',
  },
  // {
  //   id: '410544b2-4001-4271-9855-fec4b6a6442a',
  //   name: 'Teacher',
  //   email: 'teacher@nextmail.com',
  //   password: '234567',
  // },
];

const students = [
  {
    name: 'Student',
    email: 'student@nextmail.com',
    password: '123456',
    image_url: '/users/user.png',
  },
];

const lessons = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Introducing Myself',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'My Family',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'My Daily Routine',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Describing Places',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'My Hobbies',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Eating Out',
  },
];

const VocabFlashcards = [
  {
    lesson_id: lessons[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    lesson_id: lessons[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    lesson_id: lessons[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    lesson_id: lessons[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    lesson_id: lessons[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    lesson_id: lessons[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    lesson_id: lessons[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    lesson_id: lessons[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    lesson_id: lessons[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    lesson_id: lessons[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    lesson_id: lessons[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    lesson_id: lessons[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    lesson_id: lessons[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const progress = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { students, lessons };
