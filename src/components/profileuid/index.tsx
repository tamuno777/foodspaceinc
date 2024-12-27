import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ProfileUID: React.FC<{ uid: string }> = ({ uid }) => {
  const [isHashed, setIsHashed] = useState(true);

  // Function to mask the UID
  const maskUID = (uid: string) => "*".repeat(uid.length);

  return (
    <div className="my-2 flex items-center gap-2">
      <p>
        <strong>UID :</strong> {isHashed ? maskUID(uid) : uid}
      </p>
      <button
        onClick={() => setIsHashed(!isHashed)}
        className="text-gray-600 hover:text-gray-800"
      >
        {isHashed ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
};

export default ProfileUID;
