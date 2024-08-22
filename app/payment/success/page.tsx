import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const page = () => {
  return (
    <div className="pt-32 flex items-center justify-center">
      <Card className="px-8 bg-primaryc drop-shadow-lg rounded-2xl">
        <CardHeader className="flex -mb-3 flex-col gap-0">
          <div className="flex flex-col gap-5 items-center justify-center font-semibold text-[#222]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white">
              <FaCheck size={30} />
            </div>
            <p className="text-xl -mt-4 text-[#222]">Success</p>
            <p className="text-lg text-[#777]">
              Your monthly subscription to Elite Educate has been paid
              successfully
            </p>
            <Link
              href={"/courses"}
              className="bg-[#222] px-6 py-3 flex items-center gap-2 text-primaryc rounded-lg transition hover:opacity-80"
              type="submit"
            >
              Access All Courses
            </Link>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col"></CardContent>
      </Card>
    </div>
  );
};

export default page;
