import { useState } from "react";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import UserProfileModal from "./UserProfileModal";

const UserProfile = () => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const profileName = user?.user_metadata?.fullName;
  const profileEmail = user?.user_metadata?.email;
  const phone = user?.user_metadata.phone;
  const avatar = user?.user_metadata.avatar;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-[25px] font-bold mb-2">Profile Information</h2>
      <div className="flex items-center">
        <img
          src={avatar}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
      </div>
      <div>
        <p className="text-[20px] font-bold">
          Name:{" "}
          <span className="text-[15px] font-normal text-gray-600">
            {profileName}
          </span>
        </p>
        <p className="text-[20px] font-bold">
          Email:{" "}
          <span className="text-[15px] font-normal text-gray-600">
            {profileEmail}
          </span>
        </p>
        <p className="text-[20px] font-bold">
          Phone No:{" "}
          <span className="text-[15px] font-normal text-gray-600">{phone}</span>
        </p>
        {/* <p className="text-[20px] font-bold">
            Address:{" "}
            <span className="text-[15px] font-normal text-gray-600">
              {address}
            </span>
          </p> */}
      </div>

      <Button
        type="button"
        className="mt-2 text-blue-600 hover:underline"
        onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}
      >
        Edit User Profile
      </Button>

      <UserProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={user}
      />
    </div>
  );
};

export default UserProfile;
