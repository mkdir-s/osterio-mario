import Image from "next/image";
import styles from "./Tastes.module.css";
import Link from "next/link";
import tastes1 from "@/app/assets/images/tastes-1.jpg";
import tastes2 from "@/app/assets/images/tastes-2.jpg";
import tastes3 from "@/app/assets/images/tastes-3.jpg";
import linkImg from "@/app/assets/images/arrow-right.png";

const Tastes = () => {
  return (
    <section className={styles.tastes}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Image
            src={tastes1}
            className={styles.topImg}
            width={460}
            height={300}
          ></Image>
          <h2 className={styles.topTitle}>Винная карта</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h4 className={styles.title}>МНОГООБРАЗИЕ ВКУСОВ</h4>
            <p className={styles.descr}>
              <span className={styles.descrBlock}>
                Винная карта в нашем ресторане была составлена по принципу
                «только самое лучшее». В ней представлены самые известные
                винодельческие регионы: Тоскана, Пьемонт, Венето, Абруццо,
                Сицилия, Апулия. Отдельной статьёй карты является известное
                Бароло от производителя Джованни Гальярдо. Вино, которое
                называют «королём вина и вином королей»! Это самое известное
                и почитаемое вино региона Пьемонт из сорта винограда неббиоло.
              </span>
              <span className={styles.descrBlock}>
                Кроме легендарных итальянских вин, мы подобрали лучшие
                классические вина Франции — это классические вина Бургундии.
              </span>
            </p>
            <a href="#" className={`df aic ${styles.descrBottom}`}>
              <Image className={styles.linkImg} src={linkImg}></Image>
              <p className={styles.linkText}>открыть винную карту</p>
            </a>
          </div>
          <div className={styles.right}>
            <Image src={tastes2} className={styles.right1}></Image>
            <Image
              src={tastes3}
              className={styles.right2}
              width={450}
              height={290}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tastes;
