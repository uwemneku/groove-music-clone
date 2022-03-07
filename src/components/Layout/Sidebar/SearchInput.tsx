import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useAppSelector } from "../../../app/hooks";
export default function SearchInput() {
  const isSideBarOpen = useAppSelector((_) => _.sideBar.isSideBarOpen);

  return (
    <div
      className={`flex items-center ${
        isSideBarOpen ? "bg-gray-200 px-3" : "bg-transparent"
      } rounded-sm min-h-[52px]`}
    >
      {isSideBarOpen && (
        <input
          className="block flex-1 p-1 py-2 text-sm bg-gray-200"
          placeholder="Search"
        />
      )}
      <HiOutlineSearch className="transform rotate-90" />
    </div>
  );
}
