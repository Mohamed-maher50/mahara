import React from "react";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
const SignUp: React.FC = () => {
  return (
    <motion.form
      initial={{ x: "-100%" }}
      animate={{
        x: 0,
      }}
      className=" max-w-[500px] mx-auto rounded-lg p-8 shadow-sm shadow-white bg-white relative"
    >
      <motion.span
        // onClick={() =>}
        animate={{ y: "-50%", x: "50%", rotate: 0 }}
        whileHover={{ rotate: 180, scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className=" flex items-center shadow-md text-white cursor-pointer text-xl  hover:bg-white font-bold  hover:text-secondary justify-center absolute right-0 top-0 w-[50px] h-[50px] rounded-[1000px] bg-secondary"
      >
        <CgClose />
      </motion.span>
      <span className="text-2xl my-3 w-fit mx-auto text-center block">
        Create your account{" "}
      </span>
      <span className="text-center mb-10 block mx-auto text-sm text-gray-500">
        Don't have an account?
        <Link to={""} className="ml-1 text-secondary">
          Login
        </Link>
      </span>
      <div className="flex flex-col gap-y-6 ">
        <input
          type="text"
          placeholder="Username"
          className="h-11 px-3 border"
        />
        <input
          type="password"
          placeholder="password"
          className="h-11 px-3 border"
        />
        <div className="flex justify-between">
          <div className="flex select-none">
            <input id="Remember" type="checkbox" className=" " />
            <label htmlFor="Remember">Remember username</label>
          </div>
          <Link
            to={"/login/lostPassword"}
            // onClick={}
            className="underline text-sm"
          >
            Lost password?
          </Link>
        </div>
        <button
          type="submit"
          className="py-3 px-7 bg-secondary hover:bg-transparent text-white hover:text-secondary text-lg font-bold border-secondary border-2 duration-300 rounded-sm"
        >
          create
        </button>
        <button type="button" className="py-4 px-7 ">
          <img src="" />
        </button>
        <button type="button" className="py-4 px-7 ">
          <img src="" />
        </button>
      </div>
    </motion.form>
  );
};

export default SignUp;
