import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";

interface MenuProps {
  icon: JSX.Element;
  title: string;
}
function MenuItem({ icon, title }: MenuProps) {
  const isSideBarOpen = useAppSelector((_) => _.sideBar.isSideBarOpen);
  const [isOpen, setIsOpen] = useState(isSideBarOpen);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsOpen(isSideBarOpen);
      },
      isSideBarOpen ? 150 : 0
    );

    return () => clearTimeout(timer);
  }, [isSideBarOpen]);

  return (
    <li className={`flex items-center gap-4 py-3 min-h-[52px] min-w-[200px]`}>
      {icon}
      {isOpen && <span className="text-sm">{title}</span>}
    </li>
  );
}

export default MenuItem;
