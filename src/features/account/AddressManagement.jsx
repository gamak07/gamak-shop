import { useState } from "react";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import AddressManagementUpdate from "./AddressManagementUpdate";

const AddressManagement = () => {
  const { user } = useUser();
  const address = user?.user_metadata?.address;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-2">Address Management</h2>
      <p>{address}</p>
      <Button
        className="mt-2 text-blue-600 hover:underline"
        onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}
      >
        Edit Address
      </Button>

      <AddressManagementUpdate
        isOpen={isModalOpen}
        user={user}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AddressManagement;
