import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
export default function SearchInput() {
  return (
    <div className="flex items-center px-3 bg-gray-200 rounded-sm">
      <input
        className="block flex-1 p-1 py-2 text-sm bg-gray-200"
        placeholder="Search"
      />
      <HiOutlineSearch className="transform rotate-90" />
    </div>
  );
}
