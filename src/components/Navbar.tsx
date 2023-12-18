import { BsChatDots, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Children, useEffect, useState } from "react";
import LayoutWrapper from "./LayoutWrapper/LayoutWrapper";
import Login from "./login/Login";
import { AnimatePresence } from "framer-motion";
import Search from "./Search/Search";
import { sideNavContext } from "../context/SideNav";
import { auth } from "../context/Auth";
import DropDown from "./DropDown";
import DropDownItem from "./DropDownItem";
import { CgLogOut, CgPerformance, CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { Link, Navigate, useNavigate } from "react-router-dom";
interface Props {
  MenuButtonRef: React.RefObject<HTMLDivElement>;
}
const NavItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      whileHover={{ x: 20 }}
      className="flex items-center bg-gray-50  border-b-2 px-4 hover:bg-gray-100"
    >
      {children}
    </motion.div>
  );
};
const Navbar: React.FC<Props> = ({ MenuButtonRef }) => {
  const [statusNav, setsetStatusNav] = useState<boolean>(false);
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const { setSideNav, sideNav } = sideNavContext();
  const [DropDownDef, setDropDown] = useState<boolean>(false);

  const nav = useNavigate();
  const { logOut, user } = auth();
  useEffect(() => {
    window.onscroll = function (this, ev: Event) {
      if (window.pageYOffset > 70) return setsetStatusNav(true);
      setsetStatusNav(false);
    };
  }, []);
  let lang = user?.setting.lang == "ar";
  return (
    <>
      <nav
        className={`absolute  lg:fixed w-full  border-b bg-gradient-to-r from-secondary from-30% to-black ${
          statusNav ? "bg-gradient-to-r from-secondary from-30% to-black" : ""
        }  break-normal shadow-sm text-clip border-b-slate-400 duration-500  flex py-2 text-white top-0 z-10 lang-${
          user?.setting.lang
        }`}
      >
        <div className="container h-full gap-3 flex items-center mx-auto">
          <span className="logo grow text-4xl ">courses</span>
          <ul className="text-sm break-normal grow  items-end whitespace-nowrap h-full text-clip  hidden lg:flex ">
            <Link to={"/"}>
              <li className="mr-3 cursor-pointer">
                {lang ? "الرئيسة" : "Home"}
              </li>
            </Link>
            <li className="mr-3 cursor-pointer">
              {lang ? "كلمة مهنية" : "Career Talks"}
            </li>
            <li className="mr-3 cursor-pointer">
              {lang ? "المسارات التكنولوجية" : "Technological Tracks"}
            </li>
            <li className="mr-3 cursor-pointer">
              {lang ? "محتوى شركاء القطاع" : "industry Partners"}
            </li>
            <li className="mr-3 cursor-pointer">
              {lang ? "مبادرة العمل الحر" : "Freelancing initiative"}
            </li>
          </ul>
          {!user && (
            <div className="text-md cursor-pointer h-full gap-x-4 hidden lg:flex items-center">
              <div
                className="flex border-r py-3"
                onClick={() => setLoginStatus(!loginStatus)}
              >
                <AiOutlineUser className="text-2xl" />
                <span>Login</span>
                <span className="mr-2">/Register</span>
              </div>
            </div>
          )}
          <BsSearch
            className="text-2xl cursor-pointer"
            onClick={() => setSearchStatus(!searchStatus)}
          />

          <div ref={MenuButtonRef}>
            <HiOutlineMenuAlt4
              className="text-6xl lg:hidden py-3 border-l border-gray-400"
              onClick={() => setSideNav(!sideNav)}
            />
          </div>
          <div
            className="relative "
            onClick={() => {
              setDropDown(true);
            }}
          >
            {user && (
              <div className="  text-white rounded-full w-12 object-cover cursor-pointer group overflow-hidden">
                <img
                  id="DropDown1"
                  src="./images/f1.jpg"
                  className="duration-300 group-hover:scale-125"
                />
              </div>
            )}
            <DropDown open={DropDownDef} label="DropDown1">
              <NavItem>
                <CgLogOut className="text-2xl" />
                <DropDownItem
                  className={"p-2 grow  my-1  cursor-pointer"}
                  value={"dashboard"}
                  handler={() => {
                    nav("my/DashBoard");
                  }}
                />
              </NavItem>
              <NavItem>
                <CgProfile className="text-2xl" />
                <DropDownItem
                  className={"p-2 grow  my-1  cursor-pointer"}
                  value={"profile"}
                />
              </NavItem>
              <NavItem>
                <BsChatDots className="text-2xl" />
                <DropDownItem
                  className={"p-2 grow  my-1  cursor-pointer"}
                  value={"messages"}
                />
              </NavItem>
              <NavItem>
                <CgPerformance className="text-2xl" />
                <DropDownItem
                  className={"p-2 grow  my-1  cursor-pointer"}
                  value={"performance"}
                />
              </NavItem>
              <NavItem>
                <CgLogOut className="text-2xl" />
                <DropDownItem
                  className={"p-2 grow  my-1  cursor-pointer"}
                  value={"logout"}
                  handler={() => {
                    logOut();
                    nav("/");
                  }}
                />
              </NavItem>
            </DropDown>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {loginStatus ? (
          <LayoutWrapper>
            <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
          </LayoutWrapper>
        ) : (
          ""
        )}
      </AnimatePresence>
      <AnimatePresence>
        {searchStatus ? (
          <LayoutWrapper statusHandler={setSearchStatus} status={searchStatus}>
            <Search setSearchStatus={setSearchStatus} />
          </LayoutWrapper>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
