import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const fetchSpeakers = async () => {
    const res = await axios.get("/api/speakers");

    setSpeakers(res.data);
  };

  useEffect(() => {
    fetchSpeakers();
    return () => {
      setSpeakers([]);
    };
  }, []);
  return (
    // Page Header
    <div className="">
      <div className="flex justify-between items-center px-6 py-4 pb-5 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-blue-900">Interpreter_Mode</span>
          <p className="text-blue-900 text-lg font-bold uppercase">Speakers</p>
        </div>
        <img src={Logo} alt="" className="w-7 h-7" />
      </div>
      {/* Card (Speakers) */}
      <div className="px-6 ">
        {speakers.map(
          (speaker, idx) =>
            speaker.status === 1 && (
              <NavLink
                key={idx}
                to={`/profile/${speaker.id}`}
                className="flex mb-1 bg-white border-b border-gray-400 px-2 py-1 gap-4 items-center"
              >
                <img
                  className="h-10 w-10 object-cover rounded-full"
                  src={
                    speaker.photo
                      ? `/api/speakers/${speaker.id}/image`
                      : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                  }
                  alt=""
                />
                <div className="flex flex-col">
                  <h5 className="text-md text-black/75 font-bold">{speaker.name}</h5>
                  <p className="text-black/75">
                    {speaker.position}, {speaker.organization}
                  </p>
                </div>
              </NavLink>
            )
        )}
      </div>
    </div>
  );
};

export default Speakers;
