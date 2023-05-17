import React from "react";
import { auth } from "../../context/Auth";
interface Props {
  topic?: string | undefined;
}
const Header: React.FC<Props> = ({ topic }) => {
  const { user } = auth();
  return (
    <div
      className={`w-full bg-gradient-to-r from-secondary from-30% to-black p-24 lang-${user?.setting.lang}`}
    >
      <h2 className="mt-10 text-white uppercase text-3xl">
        MAHARA-TECH <span className="capitalize">{topic && ` : ${topic}`}</span>
      </h2>
    </div>
  );
};

export default Header;
