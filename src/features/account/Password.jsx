import { useState } from "react";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import PasswordUpdate from "./PasswordUpdate";

const Password = () => {
  const { user } = useUser();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
      <Button
        className="text-blue-600 hover:underline"
        onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
      >
        Change Password
      </Button>
      <br />
      <Button className="text-blue-600 hover:underline">
        Manage Notifications
          </Button>
          
          <PasswordUpdate isOpen={isOpenModal} user={user} onClose={()=>setIsOpenModal(false)} />
    </div>
  );
};

export default Password;
