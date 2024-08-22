"use client";
import React from "react";
import { Input } from "../ui/input";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <form className="w-full bg-transparent border border-primaryc rounded-sm px-1 py-1 flex items-center gap-3">
      <IoSearchOutline size={30} />
      <input
        placeholder="Search for classes, courses"
        className="w-full focus:border-none font-medium focus:outline-none bg-transparent border-transparent"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
      />
    </form>
  );
};

export default SearchBar;
