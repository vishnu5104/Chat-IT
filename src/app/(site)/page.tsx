import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-blue-800 dark:bg-dusk">
  
       
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
          Sign in to your account
        </h2>
      
      <AuthForm />
    </div>
  );
}
