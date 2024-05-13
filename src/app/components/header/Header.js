"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import logo from "@/app/assets/images/logo.png";
import menuIcon from "@/app/assets/images/menu-icon.png";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolledHeader, setIsScrolledHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsScrolledHeader(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolledHeader ? styles.headerScrolled : null}`}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href={'/'}><Image src={logo} width={150} height={100} /></Link>
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
              {/*  */}
              <Sheet>
                <SheetTrigger>
                  <Image className={styles.menu} src={menuIcon}></Image>
                </SheetTrigger>
                <SheetContent>
                  <ul className={styles.listMenu}>
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
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
