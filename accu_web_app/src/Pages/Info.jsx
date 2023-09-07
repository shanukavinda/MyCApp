import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import axios from "axios";

const Info = () => {
  const [general_infos, setGeneral_infos] = useState([]);
  const fetchGeneral_infos = async () => {
    const res = await axios.get("/api/general_info");

    setGeneral_infos(res.data);
  };

  useEffect(() => {
    fetchGeneral_infos();
    return () => {
      setGeneral_infos([]);
    };
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="px-6">
        <div className="flex justify-between items-center py-4 pb-5 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-900">Description</span>
            <p className="text-blue-900 text-lg font-bold uppercase">General Info</p>
          </div>
          <img src={Logo} alt="" className="w-7 h-7" />
        </div>

        {/* Card */}
        {general_infos.length > 0 && (
          <div className="bg-gray-200 p-2 rounded-md flex flex-col gap-2.5 mt-4">
            {general_infos.map(
              (general_info, idx) =>
                general_info.status === 1 && (
                  <div key={idx} className="w-full bg-white/80 rounded-md py-2.5 px-2 text-black/80">
                    <p className="text-md font-bold">{general_info.item_name}</p>
                    <div className="text-md text-blue-500 underline truncate">
                      <a href={general_info.file_link}>Read More</a>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Info;
