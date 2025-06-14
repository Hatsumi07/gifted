import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';

 
export default function LoginPage() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="h-full relative mx-auto flex justify-center w-full max-w-[400px] flex-col p-4">
        <div className="flex w-full items-end justify-center">
            <h1 className="font-bold text-3xl text-[#4FC3F7]">Gifted</h1>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}