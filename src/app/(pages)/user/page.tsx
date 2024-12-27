// pages/profile.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { FaUser } from "react-icons/fa";
import Sidebar from "@/components/profileSidebar";
import ProfileUID from "@/components/profileuid";

const Profile: React.FC = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push("/signIn");
    return null;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onNavigate={(route: string) => router.push(route)} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-hidden">
        <h1 className="lg:text-3xl font-bold mb-4">Welcome, {user.displayName}</h1>
        <p className="text-gray-600">Here are your profile details:</p>

        <div className="mt-4 bg-white shadow p-4 rounded">
          <div className="flex justify-center m-3">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <FaUser style={{ fontSize: "45px" }} />
            )}
          </div>
          {/* <p className="my-2">
            <strong>UID:</strong> {user.uid}
          </p> */}
            <ProfileUID uid={user.uid} />

          <div className="flex flex-wrap gap-4">
            <p>
              <strong>Name:</strong> {user.displayName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        </div>

        <div className="mt-4 bg-white shadow p-4 rounded">
          <p>
            <strong>Other Details:</strong>
          </p>
          <div className="flex flex-wrap flex-col gap-4">
            <p>
              <strong>Phone Number:</strong> {user.phoneNumber || "N/A"}
            </p>
            <p>
              N/B: To edit profile contact{" "}
              <a href="/dev" className="underline text-gray-700">
                Dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
