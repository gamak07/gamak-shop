import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useGoogleSignin } from "./useGoogleSignin";

function SignupForm() {
  const { signup, isPending } = useSignup();
  const { loginWithGoogle } = useGoogleSignin();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const onSubmit = ({ fullName, password, email, phone, address }) => {
    signup({ fullName, password, email, phone, address }, { onSettled: reset });
  };

  const handleGoogleSignIn = () => {
    // Add Google Sign-In logic here
    loginWithGoogle();
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-indigo-600 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-softWhite">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="fullname" className="block font-bold text-softWhite">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            disabled={isPending}
            // value={formData.fullname}
            // onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            {...register("fullName", { required: "This field is required" })}
          />
          <span>{errors?.fullName?.message}</span>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold text-softWhite">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border rounded mt-2"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email",
              },
            })}
          />
          <span>{errors?.fullName?.message}</span>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-bold text-softWhite">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full p-2 border rounded mt-2"
            {...register("address", {
              required: "This field is required",
            })}
          />
          <span>{errors?.fullName?.message}</span>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold text-softWhite">
            Phone No
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full p-2 border rounded mt-2"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^(?:\+234|234|0)(7|8|9)[01]\d{8}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          <span>{errors?.fullName?.message}</span>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold text-softWhite">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 border rounded mt-2"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password must contain minimum of 8 characters",
              },
            })}
          />
          <span>{errors?.fullName?.message}</span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block font-bold text-softWhite"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="w-full p-2 border rounded mt-2"
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Password do not match",
            })}
          />
          <span>{errors?.fullName?.message}</span>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 font-bold rounded hover:bg-blue-600"
          disabled={isPending}
        >
          Sign Up
        </Button>
      </form>
      <div className="mt-4">
        <Button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-10 w-full bg-softWhite text-indigo-600 py-2 px-4 font-bold rounded"
        >
          Sign In with Google{" "}
          <span>
            <FcGoogle />
          </span>
        </Button>
      </div>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-softWhite  font-bold hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
}

export default SignupForm;
