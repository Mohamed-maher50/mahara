import React, { ButtonHTMLAttributes, useRef, useState } from "react";
interface Props {
  onclick: (val: string, index?: number) => void;
  options: Array<string | number | Date>;
}
const FilterButton: React.FC<Props> = ({ onclick, options }) => {
  const [dorpDown, setDorpDown] = useState(false);
  const [checked, setChecked] = useState<string>("all");
  const button = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="relative">
      {dorpDown && (
        <div className="absolute  p-3 px-2 w-fit shadow-md bg-white -bottom-[-110%] border-2 border-gray-100 rounded-sm left-0 ">
          {options.map((op, index) => {
            return (
              <div
                key={index}
                onClick={(e: any) => {
                  setDorpDown(false);
                  setChecked(e.target.textContent);
                  onclick(e.target.textContent, index);
                }}
                className="border-b cursor-pointer hover:bg-slate-100 duration-300 px-5 py-2 border-gray-200 text-black"
              >
                {op.toString()}
              </div>
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={() => setDorpDown(!dorpDown)}
        className="relative"
        ref={button}
      >
        {checked}
      </button>
    </div>
  );
};

export default FilterButton;
