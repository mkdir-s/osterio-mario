"use client";

import Image from "next/image";
import styles from "./Interior.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "@/app/assets/images/interior-1.jpg";
import img2 from "@/app/assets/images/interior-2.jpg";
import img3 from "@/app/assets/images/interior-3.jpg";
import { useState, useEffect } from "react";

const Interior = () => {
  const [slidesPerView, setSlidesPerView] = useState(3); 

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newSlidesPerView = 3;
      if (windowWidth < 768) {
        newSlidesPerView = 1;
      } else if (windowWidth < 1024) {
        newSlidesPerView = 2;
      }
      setSlidesPerView(newSlidesPerView);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.interior}>
      <div className={styles.container}>
        <h2 className={styles.title}>Интерьер ресторана</h2>
        <div className={`df jcsb aic ${styles.subblock}`}>
          <p className={styles.subtext}>
            Дизайн ресторана “Остерио Марио” - яркий пример уютного интерьера,
            который придуман до мельчайших деталей.
          </p>
          <p className={styles.subtext}>
            Залы выполнены в приглушенных тонах, а теплый свет помогает
            разбавить их, создавая пикантную атмосферу.
          </p>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        className={styles.slider}
        spaceBetween={15}
        slidesPerView={slidesPerView}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image className={styles.sliderImg} src={img2}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.sliderImg} src={img1}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.sliderImg} src={img3}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.sliderImg} src={img2}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.sliderImg} src={img1}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.sliderImg} src={img3}></Image>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Interior;
