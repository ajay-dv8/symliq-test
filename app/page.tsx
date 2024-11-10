"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { About } from "./_components/about"; 
import { Hero } from "./_components/hero"; 
import { useRef } from "react";
import { ServiceCardsCarousel } from "./_components/services"; 
import { Mission } from "./_components/mission"; 
import { ProductsSection } from "./_components/productsSection";
import { BigText } from "./_components/big-text";
import { Plan } from "./_components/plan";
import { Contact } from "./_components/contact";

export default function Home() {

  const ref = useRef(null);
  
  // Initialize scroll and apply transform for parallax
  const { scrollY } = useScroll({ target: ref });
  
  // Slower scroll effect for background beams
  const backgroundY = useTransform(scrollY, [0, 500], [0, -100]); 

  return (
    <div className="scroll-smooth" ref={ref}> 
      <motion.div 
        style={{ y: backgroundY }} 
        className="sticky -top-20 z-0 " 
      >  
        <Hero />
      </motion.div>

      <div className="z-10 relative bg-blue">
        <About/>
        <ServiceCardsCarousel />
        <BigText/>
      </div>

      <div className="z-10 bg-blue relative">
        <ProductsSection/>

      </div>

      <div className=" z-10 relative">
        <Mission/>
        <Plan/>
      </div>
      <div className="z-10 relative">
        <Contact/> 
      </div>
    </div>
  );
}
