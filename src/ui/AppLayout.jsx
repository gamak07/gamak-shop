import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div>

      <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
