"use client";

import Image from "next/image";
import styles from "./Atmosphere.module.css";
import Link from "next/link";
import img1 from "@/app/assets/images/atmosphere-1.jpg";
import img2 from "@/app/assets/images/atmosphere-2.jpg";
import img3 from "@/app/assets/images/atmosphere-3.jpg";
import linkImg from "@/app/assets/images/arrow-right.png";
import imgMobile from '@/app/assets/images/atmosphere-mobile.jpg';
import useParallax from "@/hooks/useParallax";

const Atmosphere = () => {
  const topImg1Offset = useParallax(0.05);
  const topImg2Offset = useParallax(0.06);
  const rightImgOffset = useParallax(0.1);


  return (
    <section className={styles.atmosphere}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topImages}>
            <Image src={img1} className={styles.topImg1} style={{ transform: `translateY(${topImg1Offset}px)` }}></Image>
            <Image src={img2} className={styles.topImg2} style={{ transform: `translateY(${topImg2Offset}px)` }}></Image>
          </div>
          <h2 className={styles.topTitle}>Атмосфера уюта и спокойствия</h2>
        </div>
        <div className={styles.topMobile}>
          <Image src={img1} className={styles.topMobileImg}></Image>
          <h2 className={styles.topMobileTitle}>настоящая Рецептура</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h4 className={styles.title}>СОВРЕМЕННЫЙ ИНТЕРЬЕР</h4>
            <p className={styles.descr}>
              <span className={styles.descrBlock}>
                У нас всегда царит уютная атмосфера. Дизайн интерьера создан
                таким образом, чтобы подарить частицу тепла каждому гостю.
              </span>
              <span className={styles.descrBlock}>
                Рестораны «Osterio Mario» удобно расположены с географической
                точки зрения. Вы всегда сможете прогуляться после вкусного ужина
                и насладиться городом.
              </span>
              <span className={styles.descrBlock}>
                Вы всегда сможете прогуляться после вкусного ужина и насладиться
                городом.
              </span>
            </p>
            <a href="#" className={`df aic ${styles.descrBottom}`}>
              <Image className={styles.linkImg} src={linkImg}></Image>
              <p className={styles.linkText}>ближайший ресторан</p>
            </a>
          </div>
          <div className={styles.right}>
            <Image src={img3} className={styles.rightImg}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
