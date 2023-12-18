import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./index.css";
import { useState } from "react";

const HomeSwiper = () => {
  const [swiperRef, setSwiperRef] = useState<any>();
  const slideTo = (index: number) => {
    swiperRef.slideTo(index - 1, 0);
  };
  return (
    <Swiper
      className="home-swiper relative min-h-[100vh] select-none"
      spaceBetween={0}
      effect="slide"
      onSwiper={setSwiperRef}
      slidesPerView={"auto"}
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 3500,
      }}
      speed={2000}
      direction={"horizontal"}
      navigation
      loop={true}
    >
      <SwiperSlide>
        <div className="relative  overflow-hidden min-h-[100vh]">
          <img
            src="/images/Escwa-banner01.jpg"
            className=" h-screen w-screen object-cover "
            alt="sdf"
          />
          <div className="absolute top-52 p-4 md:left-14  w-full md:w-1/2">
            <h1 className=" text-2xl text-white  font-bold capitalize">
              sequi quisquam cupiditate earum libero officiis cum vitae iste
              repellat.
            </h1>
            <p className="mt-10 text-white z-20 top-4 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              cumque ad. Molestias repellat asperiores qui, excepturi autem
              cupiditate quasi consectetur, ipsa ut iste natus quidem, nulla
              eligendi at possimus eveniet?
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative overflow-hidden min-h-[100vh]">
          <img
            src="/images/Home-new-banner-.jpg"
            className=" h-screen w-screen object-cover "
            alt="sdf"
          />
          <div className="absolute top-52 p-4 md:left-14  w-full md:w-1/2">
            <h1 className=" text-2xl text-white  font-bold capitalize">
              sequi quisquam cupiditate earum libero officiis cum vitae iste
              repellat.
            </h1>
            <p className="mt-10 text-white z-20 top-4 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              cumque ad. Molestias repellat asperiores qui, excepturi autem
              cupiditate quasi consectetur, ipsa ut iste natus quidem, nulla
              eligendi at possimus eveniet?
            </p>
          </div>
        </div>
      </SwiperSlide>

      <div className="pagination absolute flex gap-3 text-white bottom-10 left-2/4 z-20">
        <button onClick={() => slideTo(1)} className="btn  bg-black px-2 py-1 ">
          1
        </button>
        <button
          onClick={() => slideTo(2)}
          className="slide-500 px-2 py-1 bg-black"
        >
          2
        </button>
      </div>
    </Swiper>
  );
};

export default HomeSwiper;
