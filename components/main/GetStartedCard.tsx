import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { SignInButton, SignUp, SignUpButton } from "@clerk/nextjs";
const GetStartedCard = () => {
  return (
    <Card className="px-8 bg-primaryc drop-shadow-lg rounded-2xl">
      <CardHeader className="flex -mb-3 flex-col gap-0">
        <h1 className="text-2xl font-semibold text-[#222]">Student Register</h1>
        <p className="text-lg text-[#777]">
          Pay once, and get access to all courses
        </p>
      </CardHeader>
      <CardContent className="flex flex-col">
        <form className="flex flex-col gap-2">
          <SignUp />
          {/* <SignUpButton>
            <Button
              className="bg-[#222] flex items-center gap-2 text-primaryc rounded-lg transition hover:opacity-80"
              type="submit"
            >
              <FcGoogle size={18} />
              Continue with Google
            </Button>
          </SignUpButton> */}
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <h4 className="flex sm:flex-row flex-col items-center gap-1 text-sm text-center text-[#555]">
          Already have an account?
          <Link className="font-semibold text-[#222]" href={"/sign-in"}>
            Log in now
          </Link>
        </h4>
      </CardFooter>
    </Card>
  );
};

export default GetStartedCard;
