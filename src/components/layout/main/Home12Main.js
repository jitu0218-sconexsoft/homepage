"use client";
import About5 from "@/components/sections/about/About5";
import Blogs from "@/components/sections/blogs/Blogs";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero12 from "@/components/sections/hero-banners/Hero12";
import Portfolio from "@/components/sections/portfolios/Portfolio";
import OfferedServices from "@/components/sections/services/OfferedServices";
import Video from "@/components/sections/videos/Video";
import { useHeaderContex } from "@/providers/HeaderContex";
import React from "react";

const Home12Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero12 />
      <Portfolio type={3} isLarge={true} />
      
    </main>
  );
};

export default Home12Main;
