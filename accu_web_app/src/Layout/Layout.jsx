import { Outlet } from "react-router-dom";
import Nav from "../Components/Navigation";

const Layout = () => {
  return (
    <div className="h-screen w-full sm:max-w-[460px] mx-auto flex flex-col overflow-hidden">
      <div className="flex-1 w-full block overflow-y-auto">
        <Outlet />
      </div>
      <Nav />
    </div>
  );
};

export default Layout;
