import React from "react";
import { motion } from "framer-motion";
export interface Props {
  desc?: string;
  objective?: string[];
  Requirements?: string[];
  dir?: "rtl" | "ltr";
}
const DescBox: React.FC<Props> = ({ dir, Requirements, objective, desc }) => {
  return (
    <>
      <div className=" border-2 p-5">
        <img
          src="/images/courses/covers/react-en.jpg"
          className="object-cover"
          alt=""
        />
      </div>

      <div className="p-4 border-2 rounded-lg border-gray-300 gap-y-3 grid">
        {desc && (
          <>
            <h1 className="text-lg font-bold text-gray-600">
              Course Description
            </h1>
            <p className="text-gray-600">{desc}</p>
          </>
        )}
        {objective && (
          <>
            <h1 className="text-lg font-bold text-gray-600">
              What you'll learn
            </h1>
            <h2 className="text-gray-500 text-sm">
              After completing this course you will be able to :
            </h2>
            <ul className="list-disc px-4 ">
              {objective.map((ob, index) => (
                <li key={index}>{ob}</li>
              ))}
            </ul>
          </>
        )}
        {Requirements && (
          <p className="text-gray-600">
            JavaScript + HTML + CSS fundamentals are absolutely required but you
            don’t need to be an expert.
          </p>
        )}
      </div>
    </>
  );
};

export default DescBox;
