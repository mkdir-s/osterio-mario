import Image from "next/image";
import styles from "./Reservation.module.css";
import Link from "next/link";
import img from "@/app/assets/images/reservation-img.jpg";
import { Select, DatePicker, TimePicker, InputNumber } from "antd";
import linkImg from "@/app/assets/images/arrow-right.png";

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
                <DatePicker
                  style={{
                    // background: "none",
                    // color: "rgba(255, 255, 255, 0.5)",
                    border: "1px solid rgba(192, 132, 94, 0.4)",
                    padding: "12px 24px",
                  }}
                  className={styles.datePicker}
                  placeholder="Дата"
                />
                <TimePicker placeholder="Время" style={{
                  // color: "rgba(255, 255, 255, 0.5)",
                    border: "1px solid rgba(192, 132, 94, 0.4)",
                    padding: "12px 24px",}} />
                {/* <InputNumber style={{width: '35%', padding: "9px 24px"}} min={1} max={10} placeholder="Гостей" /> */}
                <input type="input" className={`${styles.select} ${styles.selectGuests}`} placeholder="Гостей" />
                {/* <select className={styles.select}>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                </select> */}
                {/* <select className={styles.select}>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                </select> */}
                {/* <select className={styles.select}>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                  <option value="restaurant" className={styles.option}>
                    Ресторан
                  </option>
                </select> */}
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
