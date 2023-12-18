import React, { createContext, useContext, useState } from "react";
interface SideNavContextSchema {
  sideNav: boolean;
  setSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideNavContext = createContext<SideNavContextSchema>({
  sideNav: true,
  setSideNav: () => {},
});

interface sideNavProps {
  children: React.ReactNode;
}
export const SideNavProvider: React.FC<sideNavProps> = ({ children }) => {
  const [sideNav, setSideNav] = useState<boolean>(false);
  return (
    <SideNavContext.Provider value={{ sideNav, setSideNav }}>
      {children}
    </SideNavContext.Provider>
  );
};
export const sideNavContext = () => useContext(SideNavContext);
