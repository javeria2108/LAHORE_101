import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import TopRated from "@/components/TopRated";
import Weather from "@/components/Weather";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <TopRated/>
    <Explore/>
    <Weather/>
    </>
  );
}
