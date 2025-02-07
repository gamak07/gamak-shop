import { useState } from "react";
import { createPortal } from "react-dom";
import { useUpdateUserProfile } from "./useUpdateUserPofile";

import Button from "../../ui/Button";

const AddressManagementUpdate = ({ isOpen, user, onClose }) => {
  const { isUpdating, updateUserProfile } = useUpdateUserProfile();
  const [address, setAddress] = useState(user?.user_metadata.address);

  if (!isOpen) return null; // Prevent rendering if modal is closed
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address) return;

    updateUserProfile(
      { address },
      {
        onSuccess: () => {
          // isOpen; // Close modal after successful update
          onClose();
        },
      }
    );
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Edit Address</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold">Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
    document.body
  );
};

export default AddressManagementUpdate;
