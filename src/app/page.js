import Image from "next/image";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Atmosphere from "./components/atmosphere/Atmosphere";
import Tastes from "./components/tastes/Tastes";
import Professionals from "./components/professionals/Professionals";
import Interior from "./components/interior/Interior";
import Reservation from "./components/reservation/Reservation";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Atmosphere />
      <Tastes />
      <Professionals />
      <Interior />
      <Reservation />
    </>
  );
}
