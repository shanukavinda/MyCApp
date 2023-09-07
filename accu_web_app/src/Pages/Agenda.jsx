import { useState, useEffect } from "react";
import Accordian, { AccordianChild } from "../Components/Accordian";
import Logo from "../assets/Logo.png";
import axios from "axios";
import { DateTime } from "luxon";

const Agenda = () => {
  const [agendas, setAgendas] = useState([]);

  const fetchAgendas = async () => {
    const res = await axios.get("/api/agenda");
    const ags = new Map();
    for (const agenda of res.data) {
      const date = DateTime.fromHTTP(agenda.date);
      const key = date.toFormat("yyyy/LL/dd");
      if (!ags.has(key)) {
        ags.set(key, { date: date.toFormat("dd LLLL - EEEE"), data: [] });
      }
      const prevAgs = ags.get(key);
      prevAgs.data.push(agenda);
    }
    setAgendas([...ags.entries()]);
  };

  useEffect(() => {
    fetchAgendas();
    return () => {
      setAgendas([]);
    };
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="">
        <div className="flex justify-between items-center px-6 py-4 pb-5 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-900">Content_Paste</span>
            <p className="text-blue-900 text-lg font-bold uppercase">Agenda</p>
          </div>
          <img src={Logo} alt="" className="w-7 h-7" />
        </div>

        {/* Accordian */}
        <div className="relative flex flex-col gap-3 px-6">
          {agendas.map(([_, { date, data }]) => (
            <Accordian key={_} title={date}>
              {data.map(
                (agenda, idx) =>
                  agenda.status === 1 && (
                    <AccordianChild key={idx}>
                      <div className="w-full border bg-white shadow-md rounded-xl px-4 py-3">
                        {agenda.time_slot !== "N/A" && (
                          <p className="text-gray-500 font-bold mb-2 text-sm">{agenda.time_slot}</p>
                        )}
                        <p className="text-black font-semibold mb-3">{agenda.item_name}</p>
                        <div className="flex felx row justify-between items-center">
                          <div className="flex flex-row items-center gap-2 text-black text-sm">
                            <span className="material-symbols-outlined">Location_On</span>
                            <p>{agenda.location}</p>
                          </div>
                          {agenda.handout_link !== "N/A" && (
                            <a href="#" className="italic text-blue-500 underline text-sm font-bold">
                              {agenda.handout_link}
                            </a>
                          )}
                        </div>
                      </div>
                    </AccordianChild>
                  )
              )}
            </Accordian>
          ))}
        </div>
      </div>
    </>
  );
};

export default Agenda;
