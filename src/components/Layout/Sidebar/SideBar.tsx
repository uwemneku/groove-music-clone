import React from "react";
import { BiArrowBack, BiTime } from "react-icons/bi";
import { VscMenu } from "react-icons/vsc";
import { IoIosMusicalNotes, IoIosAlbums } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import MenuItem from "./MenuItem";
import SearchInput from "./SearchInput";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toggleSideBar } from "../../../features";
function SideBar() {
  const isSideBarOpen = useAppSelector((_) => _.sideBar.isSideBarOpen);
  const dispatch = useAppDispatch();
  const toggleSidebar = () => {
    dispatch(toggleSideBar());
  };
  return (
    <aside className="px-3 py-2 max-w-[300px] bg-gray-100 h-screen flex flex-col">
      <div className="flex items-center gap-6">
        <BiArrowBack />
        <p className="text-xs">Groove Music</p>
      </div>
      <Divider />
      <VscMenu onClick={toggleSidebar} />
      <Divider />
      <SearchInput />
      <ul className="">
        <MenuItem title="My Music" icon={<IoIosMusicalNotes />} />
        <MenuItem title="Recent plays" icon={<BiTime />} />
        <MenuItem
          title="Now playing"
          icon={<AiOutlineAlignLeft className="transform -rotate-90" />}
        />
      </ul>
      <hr className="bg-gray-300" />
      <ul className="flex-1">
        <div className="flex items-center">
          <div className="flex-1">
            <MenuItem title="Playlists" icon={<IoIosAlbums />} />
          </div>
          <GrAdd />
        </div>
      </ul>
      <hr className="bg-gray-300" />
      <MenuItem title="Settings" icon={<IoSettingsOutline />} />
    </aside>
  );
}

const Divider = () => <div className="my-2" />;

export default SideBar;
