import { useState } from "react";

const Accordian = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full overflow-hidden">
      <button
        className="relative select-none flex items-center rounded-2xl w-full px-4 p-2.5 font-bold text-white transition duration-150 ease-in-out bg-indigo-400 focus:ring-0"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
        <span className="absolute text-white top-2 right-4 material-symbols-outlined">
          {!open ? "Expand_More" : "Expand_Less"}
        </span>
      </button>
      {open && (
        <ul className="w-full mt-2 flex flex-col gap-1 m-0 list-none overflow-hidden bg-clip-padding">{children}</ul>
      )}
    </div>
  );
};

export const AccordianChild = ({ children }) => {
  return <li className="relative w-full flex-grow-0 flex-1">{children}</li>;
};

export default Accordian;
