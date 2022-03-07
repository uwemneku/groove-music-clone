import React from "react";
import { useAppSelector } from "../../../app/hooks";

interface MenuProps {
  icon: JSX.Element;
  title: string;
}
function MenuItem({ icon, title }: MenuProps) {
  const isSideBarOpen = useAppSelector((_) => _.sideBar.isSideBarOpen);
  return (
    <li className="flex items-center gap-4 py-3">
      {icon}
      {isSideBarOpen && <span className="text-sm">{title}</span>}
    </li>
  );
}

export default MenuItem;
