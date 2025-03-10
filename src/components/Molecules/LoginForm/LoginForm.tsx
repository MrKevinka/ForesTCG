import { Login, signUp } from "@/app/action";
import clsx from "clsx";
import { FC } from "react";

interface LoginProps {
  className?: string;
  login?: boolean;
}

export const LoginForm: FC<LoginProps> = ({ className, login }) => {
  return (
    <div className={clsx("flex flex-col border-2", className)}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="m-4" action={login ? Login : signUp}>
        <h1 className="text-center underline underline-offset-4">
          {login ? "Login" : "Sign Up"}
        </h1>
        <p>Email</p>
        <input
          type="email"
          name="email"
          required
          className="w-full border-2 p-1"
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          className="w-full border-2 p-1"
          required
        />
        <div className="mt-4 flex flex-col items-start gap-2">
          <button
            className="rounded-xl border-2 px-2 hover:bg-white"
            type="submit"
          >
            {login ? "Login" : "Signup"}
          </button>
        </div>
      </form>
    </div>
  );
};
