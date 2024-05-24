import { LoginAndSignUp } from "@/domain/loginAndSignUpPage/LoginAndSignUp";


export default function signUp() {
    return (
      <div className="w-full mb-[10rem]">
        <div className="w-[30%] my-0 mx-auto">
          <h1 className="text-center text-[3rem] mb-[5rem] font-bold">SignUp</h1>
          <LoginAndSignUp />
          <p className="text-center mt-[3rem] font-medium">
            Have an account? <a className="ml-[1rem] font-bold" href="/login">Login</a>
          </p>
        </div>
      </div>
    );
};