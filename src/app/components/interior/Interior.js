import Image from "next/image";
import styles from "./Interior.module.css";
import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Interior = () => {
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
        {/* <Swiper
          // install Swiper modules
          // modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
};

export default Interior;
