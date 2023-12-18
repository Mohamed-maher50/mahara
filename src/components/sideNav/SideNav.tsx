import React, { useEffect, useRef } from "react";
import "./SideNav.css";
import { sideNavContext } from "../../context/SideNav";
interface Props {
  MenuButtonRef: React.RefObject<HTMLDivElement>;
}
const SideNav: React.FC<Props> = ({ MenuButtonRef }) => {
  const { sideNav, setSideNav } = sideNavContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.onclick = function (e: any) {
      if (
        !ref.current?.contains(e.target) &&
        !MenuButtonRef.current?.contains(e.target)
      )
        setSideNav(false);
    };
  }, []);

  return (
    <div
      className={`sideNav fixed left-0 ${
        sideNav ? "w-[300px]" : "w-0"
      } top-0 bottom-0 h-screen z-50 bg-black text-white   overflow-hidden duration-700" `}
      ref={ref}
    >
      <h4 className="p-5 bg-gray-700 mb-10 text-white text-center">MENU</h4>
      <ul className="px-6 uppercase whitespace-nowrap flex flex-col  text-lg">
        <li className="mr-3 border-b border-gray-700 pb-3">Home</li>
        <li className="mr-3 border-b border-gray-700 pb-3">Career Talks</li>
        <li className="mr-3 border-b border-gray-700 pb-3">
          Technological Tracks
        </li>
        <li className="mr-3 border-b border-gray-700 pb-3">
          industry Partners
        </li>
        <li className="mr-3 border-b border-gray-700 pb-3">
          Freelancing initiative
        </li>
        <li className="mr-3 border-b border-gray-700 pb-3">Login</li>
        <li className="mr-3 border-b border-gray-700 pb-3">Register</li>
        <li className="mr-3 border-b border-gray-700 pb-3">Info@gmail.com</li>
      </ul>
    </div>
  );
};

export default SideNav;
