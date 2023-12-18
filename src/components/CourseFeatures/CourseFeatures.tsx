import React from "react";
import { motion } from "framer-motion";
interface Props {
  chapters: number;
  Videos: number;
  Duration: string;
  dir?: "rtl" | "ltr";
}
const CourseFeatures: React.FC<Props> = ({
  chapters,
  Videos,
  Duration,
  dir,
}) => {
  return (
    <motion.div
      initial={{ x: dir == "rtl" ? "-100%" : "100%" }}
      animate={{ x: 0 }}
      className="border-2 shadow-sm h-fit rounded-lg border-gray-200   py-3"
    >
      <h2 className="text-gray-600 ml-4 mb-3 font-semibold text-lg capitalize">
        Course Features
      </h2>
      <div className="flex flex-col gap-y-5">
        <div className="px-5 flex w-full justify-between border-gray-300 border-b-2">
          <span className="text-black font-semibold text-sm mb-3">
            Chapters
          </span>
          <span className=" text-xs text-gray-500">{chapters}</span>
        </div>
        <div className="flex px-5 w-full items-center justify-between border-gray-300 border-b-2">
          <span className="text-black font-semibold text-sm mb-3">video</span>
          <span className=" text-xs text-gray-500">{Videos}</span>
        </div>
        <div className="flex px-5 w-full justify-between items-center mb-3">
          <span className="text-black font-semibold text-sm ">Durations</span>
          <span className=" text-xs text-gray-500">{Duration}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseFeatures;
