import { LoginAndSignUp } from "@/domain/loginAndSignUpPage/LoginAndSignUp";


export default function Login() {
    return (
      <div className="w-full mb-[10rem]">
        <div className="w-[30%] my-0 mx-auto">
          <h1 className="text-center text-[3rem] mb-[5rem] font-bold">Login</h1>
          <LoginAndSignUp />
          <p className="text-center mt-[3rem] font-medium">
            New user? <a className="ml-[1rem] font-bold" href="/signUp">Create an account</a>
          </p>
        </div>
      </div>
    );
};