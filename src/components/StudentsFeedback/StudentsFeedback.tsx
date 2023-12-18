import React from "react";
import Progress from "../miscellaneous/Progress";
import { auth } from "../../context/Auth";
import { motion } from "framer-motion";
const StudentsFeedback: React.FC<{ dir?: "rtl" | "ltr" }> = ({ dir }) => {
  return (
    <motion.div
      initial={{ x: dir == "rtl" ? "-100%" : "100%" }}
      animate={{ x: 0 }}
      className=" h-fit  p-5 flex flex-col gap-y-1  border-2 shadow-sm rounded-lg border-gray-200 "
    >
      <h1 className="text-gray-600 font-semibold text-lg capitalize">
        {"Students feedback"}
      </h1>
      <div className="flex items-center gap-x-2">
        <span className="whitespace-nowrap">5 stars</span>
        <Progress percent={50} />
      </div>
      <div className="flex items-center gap-x-2">
        <span className="whitespace-nowrap">4 stars</span>
        <Progress percent={90} />
      </div>
      <div className="flex items-center gap-x-2">
        <span className="whitespace-nowrap">3 stars</span>
        <Progress percent={60} />
      </div>
      <div className="flex items-center gap-x-2">
        <span className="whitespace-nowrap">2 stars</span>
        <Progress percent={10} />
      </div>
      <div className="flex items-center gap-x-2">
        <span className="whitespace-nowrap">1 stars</span>
        <Progress percent={2} />
      </div>
    </motion.div>
  );
};

export default StudentsFeedback;
