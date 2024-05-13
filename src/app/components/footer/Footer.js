import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import img1 from "@/app/assets/images/footer-1.png";
import img2 from "@/app/assets/images/footer-2.png";
import googlePlay from "@/app/assets/images/google-play.png";
import appStore from "@/app/assets/images/app-store.png";
import partner1 from "@/app/assets/images/partner-1.png";
import partner2 from "@/app/assets/images/partner-2.png";
import partner3 from "@/app/assets/images/partner-3.png";
import partner4 from "@/app/assets/images/partner-4.png";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <h4 className={styles.leftTitle}>Навигация</h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link className={styles.listLink} href={"/"}>
                    Меню для заказа
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link className={styles.listLink} href={"/"}>
                    Программа лояльности
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link className={styles.listLink} href={"/"}>
                    Вакансии
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link className={styles.listLink} href={"/"}>
                    Франчайзинг
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link className={styles.listLink} href={"/"}>
                    Доставка и оплата
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.center}>
              <div className="df aic">
                <Image src={img1} className={styles.centerImg}></Image>
                <Image src={img2} className={styles.centerImg}></Image>
              </div>
              <p className={styles.centerText}>
                Osteria Mario — Italian Family Restaurant with Colour
              </p>
              <div className="df aic">
                <Link href={"/"}>
                  <Image src={googlePlay} className={styles.apps}></Image>
                </Link>
                <Link href={"/"}>
                  <Image src={appStore} className={styles.apps}></Image>
                </Link>
              </div>
            </div>
            <div className={styles.right}>
              <h4 className={styles.leftTitle}>Контакты</h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link
                    className={`${styles.listLink} ${styles.email}`}
                    href={"/"}
                  >
                    info@tigrus.com
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link
                    className={`${styles.listLink} ${styles.phone}`}
                    href={"/"}
                  >
                    +7 (495) 790-70-90
                  </Link>
                </li>
              </ul>
              <h4 className={styles.leftTitle}>Мы в соцсетях</h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link className={styles.listLink} href={"/"}>
                    Follow us in <span>Vkontakte</span>
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link className={styles.listLink} href={"/"}>
                    Join us in <span>Telegram</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomWrapper}>
            <p className={styles.copy}>2015–2022 © Osteria Mario</p>
            <div className={styles.bottomRight}>
              <span className={styles.bottomText}>Наши партнеры</span>
              <div className={styles.bottomPartners}>
              <Image src={partner1} className={styles.bottomImage}></Image>
              <Image src={partner2} className={styles.bottomImage}></Image>
              <Image src={partner3} className={styles.bottomImage}></Image>
              <Image src={partner4} className={styles.bottomImage}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
