"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";
import arrowsDown from "@/app/assets/images/arrows-down.png";
import arrowRight from "@/app/assets/images/arrow-right.png";
import heroImg from "@/app/assets/images/hero-img.png";
import heroBg from "@/app/assets/images/hero-bg.jpg";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const { innerWidth: width, innerHeight: height } = window;
        const { clientX: mouseX, clientY: mouseY } = e;

        const xPos = (mouseX / width) - 0.5;
        const yPos = (mouseY / height) - 0.5;

        const moveX = xPos * 40; 
        const moveY = yPos * 40;

        setBackgroundPosition({ x: 50 + moveX, y: 50 + moveY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  return (
    <section className={styles.hero} style={{
      backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
  }}>
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
