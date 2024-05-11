import Image from "next/image";
import styles from "./Reservation.module.css";
import Link from "next/link";
import img from "@/app/assets/images/reservation-img.jpg";
import { Select } from "antd";
import linkImg from '@/app/assets/images/arrow-right.png';

const Reservation = () => {
  return (
    <section className={styles.reservation}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image className={styles.img} src={img}></Image>
          <div>
            <h3 className={styles.title}>Забронируйте стол</h3>
            <p className={styles.subtitle}>
              Оставьте заявку и наш менеджер свяжется с вами для уточнения
              деталей
            </p>
            <form className={styles.form}>
              <input
                type="text"
                className={styles.input}
                placeholder="Ваше имя"
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Номер телефона"
              />
              <select className={styles.select}>
                <option value="restaurant" className={styles.option}>
                  Ресторан
                </option>
                <option value="restaurant" className={styles.option}>
                  Ресторан
                </option>
              </select>
              <div className={`df aic ${styles.bottomWrapper}`}>
                <select className={styles.select}>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                </select>
                <select className={styles.select}>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                </select>
                <select className={styles.select}>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                </select>
              </div>
              <textarea
                rows={3}
                className={styles.textarea}
                placeholder="Пожелания.."
              ></textarea>
              <a href="#" className={`df aic ${styles.descrBottom}`}>
                <Image className={styles.linkImg} src={linkImg}></Image>
                <p className={styles.linkText}>забронировать столик</p>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
