import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex items-center px-5 w-full py-4 justify-between">
        <NavLink to="/" end>
          {({ isActive }) => (
            <div
              className={`flex flex-col py-2 px-4 items-center rounded-lg w-full font-bold ${
                isActive ? "bg-blue-900 text-white" : "text-blue-900"
              }`}
            >
              <span className="material-symbols-outlined text-3xl">home</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/agenda" end>
          {({ isActive }) => (
            <div
              className={`flex flex-col py-2 px-4 items-center rounded-lg w-full ${
                isActive ? "bg-blue-900 text-white" : "text-blue-900"
              }`}
            >
              <span className="material-symbols-outlined text-3xl">Content_Paste</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/info" end>
          {({ isActive }) => (
            <div
              className={`flex flex-col py-2 px-4 items-center rounded-lg w-full ${
                isActive ? "bg-blue-900 text-white" : "text-blue-900"
              }`}
            >
              <span className="material-symbols-outlined text-3xl">Description</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/speakers" end>
          {({ isActive }) => (
            <div
              className={`flex flex-col py-2 px-4 items-center rounded-lg w-full ${
                isActive ? "bg-blue-900 text-white" : "text-blue-900"
              }`}
            >
              <span className="material-symbols-outlined text-3xl">Interpreter_Mode</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/field" end>
          {({ isActive }) => (
            <div
              className={`flex flex-col py-2 px-4 items-center rounded-lg w-full ${
                isActive ? "bg-blue-900 text-white" : "text-blue-900"
              }`}
            >
              <span className="material-symbols-outlined text-3xl">Pin_Drop</span>
            </div>
          )}
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
