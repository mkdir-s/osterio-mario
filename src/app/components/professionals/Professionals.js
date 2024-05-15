"use client";

import Image from "next/image";
import styles from "./Professionals.module.css";
import Link from "next/link";
import img1 from "@/app/assets/images/professionals-1.jpg";
import img2 from "@/app/assets/images/professionals-2.jpg";
import img3 from "@/app/assets/images/professionals-3.jpg";
import img4 from "@/app/assets/images/professionals-4.jpg";
import img5 from "@/app/assets/images/professionals-5.jpg";
import linkImg from "@/app/assets/images/arrow-right.png";
import useParallax from "@/hooks/useParallax";

const Professionals = () => {
  const topImg1Offset = useParallax(0.02);
  const topImg2Offset = useParallax(0.01);

  return (
    <section className={styles.atmosphere}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topImages}>
            <Image src={img1} className={styles.topImg1} style={{ transform: `translateY(${topImg1Offset}px)` }}></Image>
            <Image src={img2} className={styles.topImg2} style={{ transform: `translateY(${topImg2Offset}px)` }}></Image>
          </div>
          <h2 className={styles.topTitle}>Команда профессионалов</h2>
        </div>
        <div className={styles.topMobile}>
          <Image src={img1} className={styles.topMobileImg}></Image>
          <h2 className={styles.topMobileTitle}>Команда профессионалов</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h4 className={styles.title}>талантливая команда</h4>
            <p className={styles.descr}>
              <span className={styles.descrBlock}>
                Персонал ресторана “Остерио Марио” - это профи экстра-класса, их
                цель помочь вам забыть о рутине и почувствовать себя в Италии.
              </span>
              <span className={styles.descrBlock}>
                Руководит командой шеф-поваров .... с опытом работы более 10
                лет. Персонал ресторана постоянно повышает свой уровень навыков.
              </span>
            </p>
          </div>
          <div className={styles.right}>
            <Image src={img3} className={styles.rightImg}></Image>
          </div>
        </div>
        <div className={styles.chefTop}>
          <Image
            src={img4}
            className={styles.chefTopImg}
            width={460}
            height={300}
          ></Image>
          <h2 className={styles.chefTopTitle}>Наш шеф-повар</h2>
        </div>
        <div className={styles.chefContent}>
          <div className={styles.chefContentLeft}>
            <h4 className={styles.chefTitle}>кто он?</h4>
            <p className={styles.chefDescr}>
              <span className={styles.chefDescrBlock}>
                … коренной москвич, который влюблён в итальянскую кухню
                с раннего детства. Он проводил много времени в ресторане своего
                дедушки и помогал ему. Уже тогда было принято решение связать
                судьбу с кулинарией.
              </span>
              <span className={styles.chefDescrBlock}>
                Учился в…, проходил практику помощника шеф-повара в Италии. В…
                году открыл ресторан в Москве, который радует гостей своей
                вкусной едой по сей день.
              </span>
              <span className={styles.chefDescrBlock}>
                «Моя задача — дарить гостям нашего ресторана положительные
                эмоции и вкусную еду», - говорит шеф-повар.
              </span>
            </p>
          </div>
          <div className={styles.chefRight}>
            <Image src={img5} className={styles.chefRight1}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
