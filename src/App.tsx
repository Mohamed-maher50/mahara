import "./App.css";

import Loading from "./components/loading/Loading";
import Home from "./pages/Home";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import LostPassword from "./pages/LostPassword/LostPassword";
import SideNav from "./components/sideNav/SideNav";
import { useEffect, useRef, useState } from "react";
import { SideNavProvider } from "./context/SideNav";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Protected from "./Protected";
import SignUp from "./components/signUp/SignUp";
import Courses from "./pages/Courses";

function App() {
  const MenuButtonRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex overflow-hidden w-full min-h-[100vh]">
      <SideNavProvider>
        <Navbar MenuButtonRef={MenuButtonRef} />
        {/* navbar must be above sideNav because ref get from it */}
        <SideNav MenuButtonRef={MenuButtonRef} />
      </SideNavProvider>

      <div className="w-full overflow-hidden">
        <Loading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/lostPassword" element={<LostPassword />} />
          <Route
            path="/my/DashBoard/"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/courses/:id" element={<Courses />} />
        </Routes>
        {/* <LayoutWrapper>
        <Login />
      </LayoutWrapper> */}
      </div>
    </div>
  );
}

export default App;
