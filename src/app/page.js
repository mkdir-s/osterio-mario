import Image from "next/image";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Atmosphere from "./components/atmosphere/Atmosphere";
import Tastes from "./components/tastes/Tastes";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Atmosphere />
      <Tastes />
    </>
  );
}
