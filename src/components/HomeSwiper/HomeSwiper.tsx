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
        delay: 2400,
      }}
      direction={"horizontal"}
      navigation
      loop={true}
    >
      <SwiperSlide>
        <div className="relative overflow-hidden min-h-[100vh]">
          <img
            src="/images/Escwa-banner01.jpg"
            className=" h-screen w-screen object-cover "
            alt="sdf"
          />
          <div className="absolute top-52 left-1/4">
            <h1 className=" text-6xl text-white ">hello</h1>
            <p className="mt-10 text-white z-20 top-4">sfdjlkafljdsa</p>
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
          <h1 className="text-4xl text-orange-200 absolute top-52 left-52">
            hello
          </h1>
        </div>
      </SwiperSlide>

      <div className="pagination absolute bottom-10 left-2/4 z-20">
        <button onClick={() => slideTo(1)} className="slide-500">
          Slide 500
        </button>
        <button onClick={() => slideTo(1)} className="slide-500">
          Slide 500
        </button>
      </div>
    </Swiper>
  );
};

export default HomeSwiper;
