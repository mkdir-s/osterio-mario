import Image from "next/image";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Atmosphere from "./components/atmosphere/Atmosphere";
import Tastes from "./components/tastes/Tastes";
import Professionals from "./components/professionals/Professionals";
import Interior from "./components/interior/Interior";
import Reservation from "./components/reservation/Reservation";
import Footer from "./components/footer/Footer";
import { ConfigProvider } from "antd";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorText: "#00b96b",
          borderRadius: 2,
          colorBgContainer: "transparent",
          colorTextPlaceholder: 'rgba(255, 255, 255, 0.5)',
        },
      }}
    >
      <Header />
      <Hero />
      <Info />
      <Atmosphere />
      <Tastes />
      <Professionals />
      <Interior />
      <Reservation />
      <Footer />
    </ConfigProvider>
  );
}
