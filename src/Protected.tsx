import React, { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "./context/Auth";
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";
import { AnimatePresence } from "framer-motion";
import Login from "./components/login/Login";
// import Login from "./components/login/Login";
interface Props {
  children: ReactNode;
}
const Protected: React.FC<Props> = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState<boolean>(true);
  const location = useLocation();
  const { user } = auth();
  location.state = location.pathname;

  if (!user)
    return (
      <AnimatePresence>
        {loginStatus ? (
          <LayoutWrapper>
            <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
          </LayoutWrapper>
        ) : (
          ""
        )}
      </AnimatePresence>
    );
  return <>{children}</>;
};

export default Protected;
