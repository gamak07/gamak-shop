import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";

function LoginForm() {
  const { isPending, login } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ password, email }) => {
    login(
      { password, email },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  return (
    <div className="max-w-sm mx-auto my-10 p-6 bg-indigo-600 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-softWhite">Log In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-softWhite font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            disabled={isPending}
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded mt-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-softWhite font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            disabled={isPending}
            {...register("password", { required: "Password is required" })}
            className="w-full p-2 border rounded mt-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-softWhite text-indigo-600 py-2 px-4 rounded font-bold hover:bg-gray-300"
          disabled={isPending}
        >
          Log In
        </Button>
      </form>
      <div className="my-4 text-right">
        <Link
          to="/forgot-password"
          className="text-softWhite hover:underline text-sm"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
