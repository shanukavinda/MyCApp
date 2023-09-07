import FB from "../assets/FB.png";
import Twitter from "../assets/Twitter.png";
import Youtube from "../assets/Youtube.png";
import Insta from "../assets/Insta.png";
import Banner from "../assets/Banner.jpg";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Social Media Links */}
      <div className="px-6 relative">
        <div className="flex flex-row justify-end items-center gap-2 py-4">
          <a href="https://www.facebook.com/accu.thailand">
            <img src={FB} alt="" />
          </a>
          <a href="https://twitter.com/AaccuCoop">
            <img src={Twitter} alt="" />
          </a>
          <a href="https://youtube.com/@accuthailand">
            <img src={Youtube} alt="" />
          </a>
          <a href="https://www.instagram.com/aaccu.cooperative/">
            <img src={Insta} alt="" />
          </a>
        </div>

        {/* Middle banner */}
        <div className="">
          <img src={Banner} alt="" className="w-full rounded-lg" />
          {/* <img src={Logo} alt="" className="absolute top-24 right-16 w-10 h-10" />
          <div className="bg-white bg-opacity-50 mx-6 py-2 text-2xl text-black font-extrabold text-center absolute top-40 left-0 right-0 px-5 font-outline font-outline-white">
            <p>
              International Asian Credit Union Forum <br />
              2023 - Nepal
            </p>
          </div> */}
        </div>

        {/* Buttons for pages */}
        <div className="grid grid-cols-2 grid-rows-2 items-center w-full mt-3 gap-4">
          <NavLink to="/agenda" end>
            <div className="flex flex-col py-4 px-10 items-center rounded-lg w-full bg-blue-900 text-white">
              <div className="border-2  border-white rounded-full w-10 h-10  flex items-center justify-center">
                <span className="material-symbols-outlined">Content_Paste</span>
              </div>
              <p className="font-bold text-sm mt-1">Agenda</p>
            </div>
          </NavLink>
          <NavLink to="/speakers" end>
            <div className="flex flex-col py-4 px-10 items-center rounded-lg w-full bg-green-500 text-white">
              <div className="border-2  border-white rounded-full w-10 h-10  flex items-center justify-center">
                <span className="material-symbols-outlined">Interpreter_Mode</span>
              </div>
              <p className="font-bold text-sm mt-1">Speakers</p>
            </div>
          </NavLink>
          <NavLink to="/info" end>
            <div className="flex flex-col py-4 px-6 items-center rounded-lg w-full bg-indigo-400 text-white">
              <div className="border-2  border-white rounded-full w-10 h-10  flex items-center justify-center">
                <span className="material-symbols-outlined">Description</span>
              </div>
              <p className="font-bold text-sm mt-1">General Info</p>
            </div>
          </NavLink>
          <NavLink to="/field" end>
            <div className="flex flex-col py-4 px-8 items-center rounded-lg w-full bg-orange-500 text-white">
              <div className="border-2  border-white rounded-full w-10 h-10  flex items-center justify-center">
                <span className="material-symbols-outlined">Pin_Drop</span>
              </div>
              <p className="font-bold text-sm mt-1">Field Visits</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
