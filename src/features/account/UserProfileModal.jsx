import { useState } from "react";
// import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
import Button from "../../ui/Button";
import { useUpdateUserProfile } from "./useUpdateUserPofile";
// import { useUpdateUserProfile } from "./useUpdateUserProfile";

const UserProfileModal = ({ isOpen, user, onClose }) => {
  const { isUpdating, updateUserProfile } = useUpdateUserProfile();
  const [fullName, setFullName] = useState(user?.user_metadata?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.user_metadata?.phone || "");
  const [avatar, setAvatar] = useState(null);

  if (!isOpen) return null; // Prevent rendering if modal is closed
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    updateUserProfile(
      { fullName, email, phone, avatar },
      {
        onSuccess: () => {
          // isOpen; // Close modal after successful update
          onClose()
          console.log('closing')
        },
      }
    );
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-bold">Profile pic:</label>
            <input
              type="file"
              // value={avatar}
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="w-full p-2 border rounded"
              disabled={isUpdating}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-bold">Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-bold">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              disabled // Email should not be editable
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold">Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              className="bg-gray-400 py-1 px-2 rounded-md"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isUpdating}
              className="bg-indigo-600 rounded-md py-1 px-2"
            >
              {isUpdating ? "Updating..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.body // Ensure this div exists in your index.html
  );
};

export default UserProfileModal;
