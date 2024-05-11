import Image from "next/image";
import styles from "./Header.module.css";
import logo from "@/app/assets/images/logo.png";
import menuIcon from '@/app/assets/images/menu-icon.png'
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image src={logo} width={150} height={100} />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={"/"}>
                  детям
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={"/"}>
                  программа лояльности
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={"/"}>
                  контакты
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={"/"}>
                  франчайзинг
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={"/"}>
                  вакансии
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={"/"}>
                  меню для заказа и доставки
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.right}>
            <div className={`df aic ${styles.rightWrapper}`}>
              <select className={styles.select}>
                <option value="">EN</option>
                <option value="">RU</option>
              </select>
              <Image className={styles.menu} src={menuIcon}></Image>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
