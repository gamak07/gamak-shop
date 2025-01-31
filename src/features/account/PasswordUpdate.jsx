import { useState } from "react";
// import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useUpdateUserProfile } from "./useUpdateUserPofile";


const PasswordUpdate = ({ isOpen, user, onClose }) => {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { isUpdating, updateUserProfile } = useUpdateUserProfile();
  
  if (!isOpen) return null; // Prevent rendering if modal is closed
  const onSubmit = ({password}) => {
    
    updateUserProfile(
      { password },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Update Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-bold">Password:</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              disabled={isUpdating}
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold">Confirm Password:</label>
            <input
              type="password"
              autoComplete="new-password"
              id="passwordConfirm"
              disabled={isUpdating}
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  getValues().password === value || "Passwords need to match",
              })}
              className="w-full p-2 border rounded"
            />
            <span>{errors?.password?.message}</span>
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

export default PasswordUpdate;

