import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import CourseFeatures from "../components/CourseFeatures/CourseFeatures";
import StudentsFeedback from "../components/StudentsFeedback/StudentsFeedback";
import { auth } from "../context/Auth";
import DescBox from "../components/miscellaneous/DescBox";
import { UserData, comment, dummyData } from "./CoursesDammy";
import Instructor from "../components/miscellaneous/Instructor";
import { motion } from "framer-motion";

import Comment from "../components/miscellaneous/Comment";
const Courses: React.FC = () => {
  const { id, setting } = useParams();
  console.log(id);
  const { user } = auth();
  return (
    <div className="pt-20 grid gap-y-3">
      <Header topic="Courses" />
      <div className="grid lg:grid-cols-12 gap-9 py-5 container">
        {/* container  */}
        <motion.div
          className="lg:col-span-8   grid gap-y-8 "
          initial={{ x: user?.setting.lang != "en" ? "-100%" : "100%" }}
          animate={{ x: 0 }}
        >
          <DescBox {...dummyData} />
          <Instructor {...UserData} />
        </motion.div>
        {/* container */}
        <div className="lg:col-span-4  grid-cols-1  sm:grid-cols-2 lg:grid-cols-1 gap-3  place-content-center grid md:place-content-start   ">
          <CourseFeatures
            chapters={5}
            Videos={3}
            Duration="4 hours 24 minutes"
          />
          <StudentsFeedback dir={user?.setting.lang == "ar" ? "rtl" : "ltr"} />
          <div className="p-4 border-2 flex-col flex gap-y-6  border-gray-200">
            <Comment {...comment} />
            <Comment {...comment} />
            <Comment {...comment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
