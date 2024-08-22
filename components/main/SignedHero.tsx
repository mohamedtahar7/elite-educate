import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { User } from "@clerk/nextjs/server";
import { createCheckout } from "@/actions/paymentActions";
import { useRouter } from "next/navigation";
interface SignedHeroProps {
  user: User;
}
const SignedHero = ({ user }: SignedHeroProps) => {
  const [checkUrl, setCheckUrl] = useState("");
  const router = useRouter();
  const handleCreateCheckout = async () => {
    const checkout: any = await createCheckout();
    console.log(checkout);
  };
  const fetchUrl = async () => {
    const url: any = await createCheckout();
    setCheckUrl(url.checkout_url);
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <section
      id="hero"
      className="flex items-center justify-center pt-32 z-40 h-fit pb-0"
    >
      <div className="text-center md:mt-0 mt-16 w-full flex flex-col gap-5 items-center">
        {/* <h1 className="md:text-6xl text-2xl font-medium">
            We're Reshaping <br /> the Education, <br /> For Good.
          </h1> */}
        <h1 className="text-5xl font-medium ">
          {user.fullName}, <br className="md:hidden block" /> Welcome to Elite
          Educate
        </h1>
        <p className="text-xl w-[70%] opacity-90 font-normal">
          Get ready to unlock your potential with our expert-led courses and a
          vibrant community of learners. Whether you're mastering new skills or
          deepening your expertise, Elite Educate offers a tailored learning
          journey designed for your success. Let's elevate your knowledge
          together!
        </p>
        <Link href={"/courses"}>
          <Button className="py-6 px-7 flex items-center justify-center bg-primaryc text-[1rem] text-[#111] font-normal hover:opacity-90 transition uppercase rounded-xl">
            Browse All Courses
          </Button>
        </Link>
        <Link
          href={checkUrl}
          className="py-4 px-5 flex items-center justify-center bg-primaryc text-[1rem] text-[#111] font-normal hover:opacity-90 transition uppercase rounded-xl"
        >
          Pay your subscription : 2900.00 DZD
        </Link>
        {/* <Button className="py-6 px-7 flex items-center justify-center bg-primaryc text-[1rem] text-[#111] font-normal hover:opacity-90 transition uppercase rounded-xl">
          Create Checkout
        </Button> */}
      </div>
    </section>
  );
};

export default SignedHero;
