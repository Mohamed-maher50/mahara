import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import DashboardCard, {
  DashboardCardSchema,
} from "../../components/DashboardCard/DashboardCard";
import Footer from "../../components/footer/Footer";
import Calendra from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FilterCourses from "../../components/FilterCourses";
import { Loading } from "../../context/Loading";
import { auth } from "../../context/Auth";
const initData: DashboardCardSchema = {
  imgUrl: "/images/topic/BlockChain developer.png",
  progress: 60,
  status: 1,
  subtitle: "introduction in mongodb",
  title: "monogdb",
};
const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardCardSchema[]>([
    initData,
    { ...initData, status: 2 },
    { ...initData, status: 2, title: "nodejs" },
    { ...initData, status: 3, title: "reactjs" },
  ]);
  const { setLoading } = Loading();
  useEffect(() => {
    setLoading(true);
    let first = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(first);
    };
  }, []);
  const { user } = auth();
  const filterData = (topic: number) => {
    setData((perv) => perv.filter((d) => d.status == topic));
  };
  return (
    <>
      <Header
        topic={user?.setting.lang == "ar" ? "لوحة التحكم" : "Dashboard"}
      />

      <div>
        <div className="container mx-auto">
          <FilterCourses filterData={filterData} />
        </div>
        <div
          className={`container my-5 gap-x-3 mx-auto grid grid-cols-1 md:grid-cols-10  lang-${user?.setting.lang}`}
        >
          <div className="col-span-8  gap-y-3 grid  ">
            {data.map((d, index) => (
              <DashboardCard {...d} key={index} />
            ))}
          </div>
          <div className="col-span-2 ">
            <Calendra
              className=" border-secondary border-2"
              minDate={new Date(2020, 1, 1)}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
