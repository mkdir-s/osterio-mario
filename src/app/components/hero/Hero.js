"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";
import arrowsDown from "@/app/assets/images/arrows-down.png";
import arrowRight from "@/app/assets/images/arrow-right.png";
import heroImg from "@/app/assets/images/hero-img.png";
import heroBg from "@/app/assets/images/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image className={styles.heroImg} src={heroImg}></Image>
        </motion.div>
        <h1 className={styles.title}>Ресторан итальянской кухни</h1>
        <p className={styles.subtitle}>Доставим еду, какой её любят в Италии</p>
          <a href="#" className={`df aic ${styles.link}`}>
            <Image className={styles.linkImg} src={arrowRight}></Image>
            <p className={styles.linkText}>меню для заказа</p>
          </a>
        <a href="#info" className={styles.bottom}>
          <p className={styles.bottomText}>Листайте вниз</p>
          <Image className={styles.bottomImg} src={arrowsDown}></Image>
        </a>
      </div>
    </section>
  );
};

export default Hero;
