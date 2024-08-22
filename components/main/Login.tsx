import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { SignIn, SignInButton } from "@clerk/nextjs";

const Login = () => {
  return (
    <Card className="lg:w-[40%] px-8 bg-primaryc drop-shadow-lg rounded-2xl">
      <CardHeader className="flex -mb-3 flex-col gap-0">
        <h1 className="text-2xl font-semibold text-[#222]">Student Log in</h1>
        <p className="text-lg text-[#777]">Log in to your Elite Account</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <form className="flex flex-col gap-4">
          <SignIn />
          {/* <Button
            className="bg-[#222] flex items-center gap-2 text-primaryc rounded-lg transition hover:opacity-80"
            type="submit"
          >
            <SignInButton>
              <div className="flex items-center gap-2">
                <FcGoogle size={18} />
                Continue with Google
              </div>
            </SignInButton>
          </Button> */}
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <h4 className="flex sm:flex-row flex-col items-center gap-1 text-sm text-center text-[#555]">
          Don't have an account?
          <a className="font-semibold text-[#222]" href={"/sign-up"}>
            Register now
          </a>
        </h4>
      </CardFooter>
    </Card>
  );
};

export default Login;
