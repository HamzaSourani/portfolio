"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
const ProjectImages = ({ images }: { images: string[] }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, A11y]}
      spaceBetween={20}
      loop
      navigation
      autoplay
      pagination={{ clickable: true }}
      style={{ width: "100%", height: "100%" }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            className="h-full w-full  rounded-lg  "
            src={image}
            width={400}
            height={400}
            alt={""}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectImages;
