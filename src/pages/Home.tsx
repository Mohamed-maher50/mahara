import { useEffect, useState } from "react";
import HomeSwiper from "../components/HomeSwiper/HomeSwiper";

import Card, { CardSchema } from "../components/CardCourse/Card";
import { MainCardInit, data } from "./dummy";
import { Loading } from "../context/Loading";
import MainCard from "../components/MainCard/MainCard";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [tracks, setTracks] = useState<CardSchema[]>([]);
  const { loading, setLoading } = Loading();
  const nav = useNavigate();
  useEffect(() => {
    if (!tracks.length) setLoading(false);
  }, []);
  const handler = (id: string) => {
    nav(`/courses/${id}`);
  };
  return (
    <>
      <div className="flex ">
        <HomeSwiper />
      </div>
      <div>
        <div className="container text-center mx-auto pt-5 ">
          <motion.h2
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="text-xl text-secondary w-fit mx-auto my-5"
          >
            Mahara-Tech Technological Tracks
          </motion.h2>
          <p className="capitalize text-gray-600 w-fit mx-auto">
            Learn about the technological tracks provided to you by the Mahara-
            Tech platform
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12  gap-x-8">
            {tracks.map((card, index) => (
              <Card data={card} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[0, 0, 0, 0, 0, 0, 0, 0].map((card, index) => {
            return <MainCard {...MainCardInit} key={index} handler={handler} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
