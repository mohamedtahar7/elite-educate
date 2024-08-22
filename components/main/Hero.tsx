import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { BiLogoGithub } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="pt-32 z-40 h-fit pb-0">
      <div>
        <div className="md:mt-18 mt-16 w-full flex items-center justify-center flex-col gap-3">
          {/* <h1 className="md:text-6xl text-2xl font-medium">
            We're Reshaping <br /> the Education, <br /> For Good.
          </h1> */}
          <h1 className="leading-[4.5rem] md:block hidden text-6xl font-medium">
            We're Reshaping the Education, For Good.
          </h1>
          <h1 className="md:hidden block leading-[3.5rem] text-5xl font-medium">
            We're Reshaping the Education, <br /> For Good.
          </h1>
          <p className="w-full text-center md:w-[50%] md:text-lg text-xl">
            Practical Education, that gives you all the knowledge you need, to
            succeed in the digital world.
          </p>
          <a href={"/courses"}>
            <Button className="py-6 px-7 bg-primaryc text-[1rem] text-[#111] font-normal hover:opacity-90 transition uppercase rounded-xl">
              See All Courses
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
