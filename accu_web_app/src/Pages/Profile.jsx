import { NavLink, useParams } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();

  const [speaker, setSpeaker] = useState(null);
  const fetchSpeakers = async () => {
    const res = await axios.get(`/api/speakers/${id}`);

    setSpeaker(res.data);
  };

  useEffect(() => {
    fetchSpeakers();
    return () => {
      setSpeaker(null);
    };
  }, [id]);
  return (
    <>
      {/* Page Header */}
      <div className="">
        <div className="flex justify-between items-center px-6 py-4 pb-5 sticky top-0 bg-white z-10">
          <NavLink to="/speakers" className="material-symbols-outlined text-blue-900">
            Arrow_Back
          </NavLink>
          <img src={Logo} alt="" className="w-7 h-7" />
        </div>

        {/* Proflie Image & Description */}
        <div className="px-6">
          {speaker && (
            <div className="w-full border-2 border-gray-300 rounded-xl bg-white p-4">
              <div className="flex flex-col items-center">
                <img className="h-32 w-32 object-cover rounded-full mt-6" src={`/api/speakers/${id}/image`} alt="" />
                <p className="font-bold text-black text-lg mt-2">{speaker.name}</p>
                <p className="text-gray-700 text-sm">
                  {speaker.position}, {speaker.organization}
                </p>
              </div>
              <p className="text-black text-sm my-5 text-justify">{speaker.profile}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
