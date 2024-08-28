import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="flex 2xl:h-screen  my-5 w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
