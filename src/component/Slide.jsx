// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const images = [
  { id: 1, link: "images/home-background.png" },
  { id: 2, link: "images/Sajek.png" },
  { id: 3, link: "images/sundorbon.png" },
  // { id: 4, link: "images/Sreemongol.png" },
];

const Slide = () => {
  return (
    <div className="absolute -right-[210px] overflow-hidden">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        className="mySwiper z-10 m-0">
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            {/* Ensure the image link is correct */}
            <img src={image.link} alt={`Slide ${image.id}`}
            className="rounded-[20px] w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
