"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/elm-path-logo.png";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Button } from "../ui/button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { navLinks } from "@/lib/links";
import { RiMenu3Line } from "react-icons/ri";
import { signedLinks } from "@/lib/SignedLinks";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);
  const router = useRouter();
  return (
    <header className="fixed z-50 w-full flex items-center justify-between py-[3%] md:py-[2%] px-6 md:px-10">
      <a
        className="transition z-30 text-4xl font-semibold hover:opacity-80"
        href={"/"}
      >
        Elite Educate
      </a>
      <nav className="md:block z-30 bg-blur py-1 px-1 rounded-xl hidden text-primaryc">
        <ul className="flex items-center gap-8">
          {navLinks.map((link, id) => (
            <a
              href={link.href}
              className="text-sm p-3  hover:bg-[#000]/40 rounded-lg transition"
              key={id}
            >
              {link.text}
            </a>
          ))}{" "}
        </ul>
      </nav>
      <div className="md:hidden flex items-center ">
        <Button
          onClick={() => setActiveNav(!activeNav)}
          className="md:hidden flex items-center justify-center hover:bg-[#444]/40 transition bg-blur rounded-full h-14 z-30 w-14"
        >
          <RiMenu3Line size={40} />
        </Button>
        {/* {user && (
          <div
            onClick={() => setAccountMenu(!accountMenu)}
            className="relative p-1 hover:bg-[#000]/40 rounded-lg transition cursor-pointer"
          >
            <img
              className="w-12 h-12 rounded-full"
              src={user?.imageUrl}
              alt="user image"
            />
            <div
              className={`${
                accountMenu ? "block" : "hidden"
              } absolute px-4 py-2 bg-blur rounded-xl top-16 right-0`}
            >
              <Button
                onClick={() => router.push("/")}
                className="text-sm p-3  hover:bg-[#000]/40 rounded-lg transition"
              >
                <SignOutButton>Sign Out</SignOutButton>
              </Button>
            </div>
          </div>
        )} */}
      </div>
      {/* mobile nav */}
      <nav
        className={`md:hidden z-10 block fixed ${
          activeNav ? "top-28" : "-top-full"
        } w-[90%] bg-blur py-1 px-1 transition-all duration-200 rounded-xl text-primaryc`}
      >
        <ul className="flex flex-col gap-2 justify-center">
          {navLinks.map((link, id) => {
            // if (user && link.text === "Get Started") {
            //   return null;
            // }
            return (
              <a
                href={link.href}
                onClick={() => setActiveNav(false)}
                className="text-[1rem] p-3 hover:bg-[#000]/40 rounded-lg transition"
                key={id}
              >
                {link.text}
              </a>
            );
          })}
        </ul>
      </nav>
      {/* <div
        className={`absolute z-20 bg-secondaryc w-full h-fit py-10 transition-all ${
          activeNav ? "top-16" : "-top-96"
        } left-0 lg:hidden flex flex-col`}
      >
        <nav className="flex flex-col gap-5 text-primaryc">
          <ul className="flex flex-col items-center gap-5">
            <li>
              <Link href={"/"}>Browse</Link>
            </li>
            <li>
              <Link href={"/"}>Learning Paths</Link>
            </li>
            <li>
              <div className="flex justify-center items-center gap-2">
                <Button className="font-bold text-md transition bg-ternaryc text-secondaryc rounded-md hover:opacity-85">
                  Sign In
                </Button>
                <Button className="font-bold text-md transition bg-ternaryc rounded-md hover:opacity-85 text-secondaryc">
                  Sign Up
                </Button>
              </div>
            </li>
            <li>
              <SearchBar />
            </li>
          </ul>
        </nav>
      </div> */}
    </header>
  );
};

export default Navbar;
