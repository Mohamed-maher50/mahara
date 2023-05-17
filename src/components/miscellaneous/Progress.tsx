import React from "react";
import { motion } from "framer-motion";
interface Props {
  percent: number;
  dir?: "rtl" | "ltr";
}
const Progress: React.FC<Props> = ({ percent, dir }) => {
  return (
    <motion.div
      dir={dir}
      className="h-3  rounded-lg overflow-hidden bg-gray-200 w-full"
    >
      <motion.div
        className="h-full bg-yellow-300"
        initial={{ width: 0 }}
        animate={{ width: percent + "%" }}
      ></motion.div>
    </motion.div>
  );
};

export default Progress;
