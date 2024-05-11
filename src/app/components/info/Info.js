import Image from "next/image";
import styles from "./Info.module.css";
import Link from "next/link";
import info1 from "@/app/assets/images/info-1.jpg";
import info2 from "@/app/assets/images/info-2.jpg";
import info3 from "@/app/assets/images/info-3.jpg";
import linkImg from "@/app/assets/images/arrow-right.png";

const Info = () => {
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Image
            src={info1}
            className={styles.topImg}
            width={700}
            height={450}
          ></Image>
          <h2 className={styles.topTitle}>Кухня, которую любят в Италии</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h4 className={styles.title}>ВКУС ИТАЛИИ</h4>
            <p className={styles.descr}>
              <span className={styles.descrBlock}>
                Солёным ветром, раскалённым солнцем, сладкими булочками с
                корицей, терпким кофе ристретто, соком лопнувших от зрелости
                томатов, чудесным ароматом цветущих апельсиновых деревьев — вот,
                чем пахнет Италия.
              </span>
              <span className={styles.descrBlock}>
                Такую Италию мы привезли в самое сердце Москвы. Паста, пицца,
                тирамису, сыры, морепродукты и брускетта — любимые итальянские
                блюда, по-настоящему вкусный кофе и официанты, с которыми
                хочется подружиться.
              </span>
            </p>
            <a href="#" className={`df aic ${styles.descrBottom}`}>
              <Image className={styles.linkImg} src={linkImg}></Image>
              <p className={styles.linkText}>забронировать столик</p>
            </a>
          </div>
          <div className={styles.right}>
            <Image src={info2} className={styles.right1}></Image>
            <Image src={info3} className={styles.right2} width={450} height={290}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
