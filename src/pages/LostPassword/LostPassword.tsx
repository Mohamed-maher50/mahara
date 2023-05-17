import React, { useRef } from "react";

import { motion } from "framer-motion";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
const LostPassword: React.FC = () => {
  const searchValue = useRef<HTMLInputElement | null>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex  flex-col ">
      <Header />
      <motion.div
        className="w-full h-full pt-5  my-20"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
      >
        <form
          className="p-5  flex-col w-fit gap-6 flex mx-auto border-secondary border-2 rounded-md shadow-sm shadow-secondary"
          onSubmit={submitHandler}
        >
          <input
            autoFocus={true}
            type="text"
            className="w-72 ps-4 border-2 outline-none"
            placeholder="Enter Email or username"
            ref={searchValue}
          />
          <button
            className="outline-style mx-auto hover:outlineHove duration-200"
            type="submit"
          >
            Search
          </button>
        </form>
      </motion.div>
      <Footer />
    </div>
  );
};

export default LostPassword;
