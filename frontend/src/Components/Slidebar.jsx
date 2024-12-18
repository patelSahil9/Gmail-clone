import React from "react";
import { FaPencil } from "react-icons/fa6";
import {
  FaInbox,
  FaStar,
  FaClock,
  FaPaperPlane,
  FaFile,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar() {
  return (
    <div className="h-full bg-white w-[75.5px] hover:w-[240px] absolute transition-all duration-200 ease-in-out border-r border-gray-300">
      <div className="p-2">
      <div className="bg-cyan-200 text-white h-[56px] max-w-[130px] flex overflow-hidden items-center rounded-[16px] cursor-pointer shadow-md">
  <div className="text-black pl-5 ">
    <FaPencil size={18} />
  </div>
  <span className="hidden ml-3 font-semibold text-sm md:flex text-black">
    &nbsp;&nbsp;Compose
  </span>
</div>

      </div>
      <div className=" h-[400px] w-full  overflow-hidden pl-5 mt-2 ">
        <SidebarItem icon={<FaInbox size={18} />} label="Inbox " />
        <SidebarItem icon={<FaStar size={18} />} label="Starred" />
        <SidebarItem icon={<FaClock size={18} />} label="Snoozed" />
        <SidebarItem icon={<FaPaperPlane size={18} />} label="Sent" />
        <SidebarItem icon={<FaFile size={18} />} label="Drafts" />
        <div>
          <SidebarItem icon={<IoIosArrowDown size={18} />} label="More" />
        </div>
      </div>
    </div>
  );
}

// Sidebar Item Component
const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center p-2 hover:bg-gray-200 cursor-pointer rounded-full">
    <div className="text-gray-600">{icon}</div>
    <span className="hidden ml-7 text-black from-neutral-50 text-sm md:block">{label}</span>
  </div>
);
