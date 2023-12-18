import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { auth } from "../../context/Auth";
import { useForm } from "react-hook-form";
interface Props {
  loginStatus: boolean;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
type FormFiled = {
  email: string;
  password: string;
  Remember: string;
};
const Login: React.FC<Props> = ({ loginStatus, setLoginStatus }) => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFiled>();
  const { user, setUser } = auth();
  useEffect(() => {
    return () => {
      setLoginStatus(!loginStatus);
    };
  }, []);
  const submitHandler = (data: FormFiled) => {
    setUser({
      ...data,
      setting: {
        lang: "en",
      },
    });
    setLoginStatus(false);
  };
  console.log("loop in login");
  return (
    <motion.form
      initial={{ y: "-100%" }}
      animate={{
        y: 0,
      }}
      onSubmit={handleSubmit(submitHandler)}
      className=" min-w-[400px] rounded-lg p-8 shadow-sm shadow-white bg-white relative"
    >
      <motion.span
        onClick={() => setLoginStatus(!loginStatus)}
        animate={{ y: "-50%", x: "50%", rotate: 0 }}
        whileHover={{ rotate: 180, scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className=" flex items-center shadow-md text-white cursor-pointer text-xl  hover:bg-white font-bold  hover:text-secondary justify-center absolute right-0 top-0 w-[50px] h-[50px] rounded-[1000px] bg-secondary"
      >
        <CgClose />
      </motion.span>
      <span className="text-2xl my-3 w-fit mx-auto text-center block">
        Login to your account
      </span>
      <span className="text-center mb-10 block mx-auto text-sm text-gray-500">
        Don't have an account?
        <Link to={"/signUp"} className="ml-1 text-secondary">
          Sign up!
        </Link>
      </span>
      <div className="flex flex-col gap-y-6 ">
        <input
          type="text"
          placeholder="Username"
          className="h-11 px-3 border"
          {...register("email")}
        />
        <input
          type="password"
          placeholder="password"
          className="h-11 px-3 border"
          {...register("password", { required: "required password" })}
        />
        <AnimatePresence>
          {errors.password?.message && (
            <motion.span
              exit={{ y: "100%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-700"
            >
              {errors.password?.message}
            </motion.span>
          )}
        </AnimatePresence>

        <div className="flex justify-between">
          <div className="flex select-none">
            <input
              id="Remember"
              type="checkbox"
              className=" "
              {...register("Remember")}
            />
            <label htmlFor="Remember">Remember username</label>
          </div>
          <Link
            to={"/login/lostPassword"}
            onClick={() => setLoginStatus(false)}
            className="underline text-sm"
          >
            Lost password?
          </Link>
        </div>
        <button
          type="submit"
          className="py-3 px-7 bg-secondary hover:bg-transparent text-white hover:text-secondary text-lg font-bold border-secondary border-2 duration-300 rounded-sm"
        >
          Log in
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

export default Login;
