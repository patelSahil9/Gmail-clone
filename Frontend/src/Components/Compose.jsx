import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPen } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { RiGalleryLine } from "react-icons/ri";
import { PiGoogleDriveLogoLight } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
import { MdOutlineLink } from "react-icons/md";
import { MdOutlineFormatColorText } from "react-icons/md";


export default function Compose({ showCompose }) {
  const [showRecipent, setShowRecipent] = React.useState(false);
  const [to, setTo] = React.useState("");
  return (
    <>
      <div
        className={`bg-gray-100 w-[453px] ml-[75px] h-[530px] fixed bottom-2 z-0 right-[70px] flex flex-col  rounded-lg ${
          showCompose ? "block" : "hidden"
        }`}
      >
        <div className="h-[40px] w-fulltext-s mt-[5px] flex items-center bg-[#D3E3FD] ">
          New Message
        </div>
        <div className="h-[40px] w-full bg-white flex">
          <div
            className={` items-center ${showRecipent ? "hidden" : "fle"}`}
            onClick={() => setShowRecipent(true)}
          >
            Recipent
          </div>
          <input
            type="text"
            placeholder="To"
            onChange={(e) => setTo(e.target.value)}
            className={`w-full h-full bg-white border-b-2 ${
              showRecipent ? "" : "hidden"
            }`}
          ></input>
        </div>
        <div className="h-[40px] w-full bg-black">
          <input
            type="text"
            placeholder="Subject"
            className="w-full h-full bg-white border-b-2"
          ></input>
        </div>
        <div className="h-full w-full bg-white">
          <input
            onClick={() => {
              if (to === "" && showRecipent === true) {
                setShowRecipent(false);
              }
            }}
            type="text"
            placeholder=""
            className="w-full h-full bg-white"
          ></input>
        </div>
        <div className="flex items-center bg-white p-2 shadow-lg rounded-md">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-l-full hover:bg-blue-700">
            Send
          </button>
          <button className="h-[40px] w-[30px] flex items-center  bg-blue-600 text-white font-semibold rounded-r-full border-l-2 hover:bg-blue-700">
            <FaChevronDown size={12} fill="#fff" className="ml-1.5"/>
          </button>
          <div className="flex items-center space-x-4 ml-4 text-gray-600">
            <MdOutlineFormatColorText className="hover:text-black cursor-pointer" />
            <MdOutlineLink className="hover:text-black cursor-pointer" />
            <CiFaceSmile className="hover:text-black cursor-pointer" />
            <PiGoogleDriveLogoLight className="hover:text-black cursor-pointer" />
            <RiGalleryLine className="hover:text-black cursor-pointer" />
            <CiLock className="hover:text-black cursor-pointer" />
            <BsPen className="hover:text-red-600 cursor-pointer" />
            <BsThreeDotsVertical className="hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
