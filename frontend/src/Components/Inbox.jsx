import React, { useState } from "react";
import {
  FaAngleDown,
  FaArrowRotateRight,
  FaEllipsisVertical,
  FaChevronLeft,
  FaChevronRight,
  FaInbox,
} from "react-icons/fa6";
import { PiDotsSixVertical } from "react-icons/pi";
import { BiArchiveIn } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import { FaRegClock, FaTags, FaUsers, FaBell } from "react-icons/fa"; // New icons
import { Link } from "react-router";

export default function Inbox() {
  const [emails, setEmails] = useState([
    // Sample email data
    {
      id: 1,
      sender: "John Doe",
      subject: "Welcome!",
      body: "This is a sample email.",
      timestamp: "2 hours ago",
      category: "Primary",
    },
    {
      id: 2,
      sender: "Google Support",
      subject: "Account Update",
      body: "Your account password has been updated.",
      timestamp: "1 day ago",
      category: "Updates",
    },
    {
      id: 3,
      sender: "Amazon",
      subject: "Your Order",
      body: "Thank you for your order.",
      timestamp: "3 days ago",
      category: "Promotions",
    },
    {
      id: 4,
      sender: "LinkedIn",
      subject: "New connection request",
      body: "You have a new connection request.",
      timestamp: "1 week ago",
      category: "Social",
    },
    {
      id: 5,
      sender: "Facebook",
      subject: "Friend request",
      body: "You have a new friend request.",
      timestamp: "2 weeks ago",
      category: "Social",
    },
    {
      id: 6,
      sender: "Twitter",
      subject: "New follower",
      body: "You have a new follower.",
      timestamp: "3 weeks ago",
      category: "Social",
    },
    {
      id: 7,
      sender: "Instagram",
      subject: "New follower",
      body: "You have a new follower.",
      timestamp: "4 weeks ago",
      category: "Social",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState("Primary");

  const categories = [
    {
      name: "Primary",
      icon: <FaInbox size={16} />,
      count: emails.filter((email) => email.category === "Primary").length,
    },
    {
      name: "Promotions",
      icon: <FaTags size={16} />,
      count: emails.filter((email) => email.category === "Promotions").length,
    },
    {
      name: "Social",
      icon: <FaUsers size={16} />,
      count: emails.filter((email) => email.category === "Social").length,
    },
    {
      name: "Updates",
      icon: <FaBell size={16} />,
      count: emails.filter((email) => email.category === "Updates").length,
    },
  ];

  const filteredEmails = emails.filter(
    (email) => email.category === currentCategory
  );

  return (
    <div className="bg-gray-100 w-full ml-[75px] h-screen flex flex-col">
      <div className="w-full h-[48px] bg-white flex items-center justify-between border-b border-gray-300 px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <FaAngleDown size={14} className="ml-2 cursor-pointer" />
          </div>
          <FaArrowRotateRight
            size={20}
            className="cursor-pointer hover:bg-gray-200 rounded-full p-2"
          />
          <FaEllipsisVertical
            size={20}
            className="cursor-pointer hover:bg-gray-200 rounded-full p-2"
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            {1}–{filteredEmails.length} of {emails.length}
          </span>
          <FaChevronLeft
            size={20}
            className="cursor-pointer hover:bg-gray-200 rounded-full p-2"
          />
          <FaChevronRight
            size={20}
            className="cursor-pointer hover:bg-gray-200 rounded-full p-2"
          />
        </div>
      </div>

      <div className="w-full h-[56px] flex bg-gray-50 border-b border-gray-300">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`flex items-center justify-center w-[120px] cursor-pointer p-2 ${
              currentCategory === category.name
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setCurrentCategory(category.name)}
          >
            <div className="flex items-center gap-2">
              {category.icon}
              <span className="text-sm font-semibold">{category.name}</span>
            </div>
            <span className="ml-2 text-xs text-gray-500">{category.count}</span>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white">
        {filteredEmails.map((email) => (
          <Link 
            to={`/Email/${email.id}`}
            key={email.id}
            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer group border-b border-gray-200"
          >
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <PiDotsSixVertical
                size={16}
                className="opacity-0 group-hover:opacity-100 transition"
              />
            </div>
            <h2 className="text-sm font-medium w-[200px] truncate">
              {email.sender}
            </h2>
            <p className="text-sm w-[300px] truncate text-gray-600">
              <span className="font-semibold">{email.subject}</span> -{" "}
              {email.body}
            </p>
            <div className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 ">
              <BiArchiveIn size={20} className="cursor-pointer" />
              <RiDeleteBin6Line size={20} className="cursor-pointer" />
              <IoIosMailOpen size={20} className="cursor-pointer" />
              <FaRegClock size={20} className="cursor-pointer" />
            </div>
            <p className="text-xs text-gray-500 ml-4 group-hover:hidden">
              {email.timestamp}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
