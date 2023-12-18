import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../context/Auth";

export type DashboardCardSchema = {
  imgUrl: string;
  title: string;
  subtitle: string;
  progress: number;
  status: number;
};
const DashboardCard: React.FC<DashboardCardSchema> = ({
  imgUrl,
  title,
  subtitle,
  progress,
}) => {
  const { user } = auth();
  console.log(user);
  console.log(progress);
  return (
    <div className="card grid grid-cols-1 md:grid-cols-4 p-4  w-full group hover:scale-100 bg-gray-100">
      <div className="relative  flex w-full items-center">
        <img src={"./" + imgUrl} className="w-full" alt="block chain" />
        <div className="layout flex   justify-center items-center  ease-in-out duration-500  scale-0 group-hover:scale-100 absolute w-full h-full bg-[rgba(0,0,0,0.7)] ">
          <Link
            to=""
            className=" outline-style rounded-full duration-300 hover:outlineHove hover:border-white "
          >
            View
          </Link>
        </div>
      </div>
      <div className="w-full ml-3 col-span-3">
        <h2 className="text-gray-500">{title}</h2>
        <h1 className="title my-2">{subtitle}</h1>
        <div className="h-3 w-52 bg-white rounded-3xl overflow-hidden shadow">
          <div
            className={`bg-blue-500 h-full duration-500 `}
            style={{ width: progress + "%" }}
          ></div>
        </div>
        <span className="subtitle text-black ">
          {progress.toString()}% completed
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;
