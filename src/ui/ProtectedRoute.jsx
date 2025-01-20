import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { isPending, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/signup");
  }, [isAuthenticated, isPending, navigate]);

  if (isPending)
    return (
      <div className="h-full flex items-center justify-center">
        <Loading />
      </div>
    );

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
