import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import axios from "axios";
import { DateTime } from "luxon";

const Field = () => {
  const [field_visits, setField_visits] = useState([]);
  const fetchField_visits = async () => {
    const res = await axios.get("/api/field_visits");

    setField_visits(res.data);
  };

  useEffect(() => {
    fetchField_visits();
    return () => {
      setField_visits([]);
    };
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="">
        <div className="flex justify-between items-center px-6 py-4 pb-5 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-900">Pin_Drop</span>
            <p className="text-blue-900 text-lg font-bold uppercase">Field Visits</p>
          </div>
          <img src={Logo} alt="" className="w-7 h-7" />
        </div>

        {/* Card */}
        <div className="px-6">
          {field_visits.map(
            (field_visit, idx) =>
              field_visit.status === 1 && (
                <div key={idx} className="flex rounded-xl mb-1 bg-gray-100/95 p-2 gap-4 overflow-hidden">
                  <img
                    className="h-20 w-24 object-cover rounded-lg flex-shrink-0"
                    src={`/api/field_visits/${field_visit.id}/image`}
                    alt=""
                  />
                  <div className="flex flex-col overflow-hidden whitespace-pre-wrap ">
                    <h5 className="text-md text-black font-bold">{field_visit.location}</h5>
                    <p className="text-sm text-black truncate">{field_visit.cu_name}</p>
                    <p className="text-xs text-neutral-500">
                      {DateTime.fromHTTP(field_visit.date).toFormat("yyyy/LL/dd")}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Field;
