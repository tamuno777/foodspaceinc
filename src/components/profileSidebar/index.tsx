"use client";

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { FaUser, FaUtensils, FaSignOutAlt } from "react-icons/fa";

interface SidebarProps {
  onNavigate: (route: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const handleLogout = async () => {
    await signOut(auth);
    onNavigate("/auth");
  };

  return (
    <div className="flex flex-col bg-pink-200 border-pink-700 border-r  text-white lg:w-64 h-full p-4 w-20">
      <h2 className="lg:text-2xl font-bold mb-6 text-sm text-black"> Profile</h2>

      <button
        className="flex items-center mb-4 py-2 px-4 bg-pink-500 hover:bg-blue-600 rounded"
        onClick={() => onNavigate("/profile")}
      >
        <FaUser className="mr-2 text-lg" />
        <span className="hidden lg:inline">User Details</span>
      </button>

      <button
        className="flex items-center mb-4 py-2 px-4 bg-gray-500 hover:bg-green-600 rounded"
        onClick={() => onNavigate("/submitRecipie")}
      >
        <FaUtensils className="mr-2 text-lg" />
        <span className="hidden lg:inline">Submit Dish</span>
      </button>

      <button
        className="flex items-center py-2 px-4 bg-red-400 hover:bg-red-600 rounded"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="mr-2 text-lg " />
        <span className="hidden lg:inline">Log Out</span>
      </button>
    </div>
  );
};

export default Sidebar;
