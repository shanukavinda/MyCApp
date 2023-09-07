import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import axios from "axios";
import { DateTime } from "luxon";

const Login = () => {
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      register_number: formData.get("register_number"),
    };
    try {
      const res = await axios.post("/api/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data.message === "Login successful") {
        localStorage.setItem("user", DateTime.now().plus({ days: 1 }).toMillis());
        navigate("/");
      }
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    // Login Banner
    <div className="h-screen w-full sm:max-w-[460px] mx-auto flex flex-col overflow-hidden relative">
      <svg
        className="absolute top-0 left-0 right-0 z-0"
        width="100%"
        height="284"
        viewBox="0 0 390 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_45_241)">
          <ellipse
            cx="88.2122"
            cy="64.4669"
            rx="249.033"
            ry="129.657"
            transform="rotate(-23.9111 88.2122 64.4669)"
            fill="#4484FF"
            fillOpacity="0.74"
            shapeRendering="crispEdges"
          />
        </g>
        <g filter="url(#filter1_d_45_241)">
          <ellipse
            cx="354.12"
            cy="64.1005"
            rx="93"
            ry="164.875"
            transform="rotate(-66.9644 354.12 64.1005)"
            fill="#03125E"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_45_241"
            x="-149.486"
            y="-91.2204"
            width="475.397"
            height="319.375"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_241" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_241" result="shape" />
          </filter>
          <filter
            id="filter1_d_45_241"
            x="194.052"
            y="-43.0831"
            width="320.135"
            height="222.367"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_241" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_241" result="shape" />
          </filter>
        </defs>
      </svg>

      {/* Logo & Heding */}
      <form onSubmit={submit} className="px-10 flex flex-col gap-8 z-10 items-center justify-center h-full w-full">
        <img src={Logo} alt="" />
        <p className="text-lg text-blue-900 font-bold text-center">
          International <br /> Asian Credit Union Forum <br />
          2023
        </p>

        {/* Reg Number for Login */}
        <input
          type="text"
          placeholder="Registration Number"
          name="register_number"
          className="border-b w-full focus:rign-0 focus:outline-0 p-2 mt-8"
        />
        <button
          type="submit"
          className="px-4 py-2 text-center w-full bg-blue-400 rounded-lg uppercase font-bold text-white"
        >
          Sign in
        </button>
      </form>

      {/* Footer */}
      <svg
        className="absolute bottom-0 left-0 right-0"
        width="100%"
        height="65"
        viewBox="0 0 390 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="195.5" cy="60.5" rx="225.5" ry="60.5" fill="#03125E" />
      </svg>
      <p className="absolute bottom-4 left-0 right-0 text-white text-center text-sm ">
        Association of Asian Confederation of Credit Unions
      </p>
    </div>
  );
};

export default Login;
