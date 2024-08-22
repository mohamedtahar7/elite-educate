import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex sm:flex-row flex-col items-center gap-3 justify-between sm:px-12 px-6 pb-8 -mb-12">
      <div className="flex items-center gap-4">
        <h1 className="transition cursor-pointer hover:opacity-60 text-[0.75rem] opacity-70 uppercase">
          &copy;2025 Elite Educate
        </h1>
        <h1 className="transition cursor-pointer hover:opacity-60 text-[0.75rem] opacity-70 uppercase">
          All Rights Reserved
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={"/"}
          className="transition hover:opacity-60 text-[0.75rem] opacity-70 uppercase"
        >
          Contact
        </Link>
        <Link
          href={"/"}
          className="transition hover:opacity-60 text-[0.75rem] opacity-70 uppercase"
        >
          Terms
        </Link>
      </div>
    </footer>
  );
};

export default Footer;