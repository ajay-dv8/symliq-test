"use client";
// import Image from "next/image"; 
import { Carousel, Card } from "@/components/ui/cards-carousel";
import { ServicesSubTitle } from "./serviccesSubTitle";
import { GreenDot } from "./dot";
import { services } from "@/constants/seviceData";

export function ServiceCardsCarousel() {
  const cards = services.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-blue ">
      <div className=" pl-4 lg:pl-10 ">
        <h2 className="max-w-7xl mx-auto text-3xl md:text-6xl text-white dark:text-neutral-200 font-sans">
          <GreenDot/>
          Our Major Services
        </h2>
        <ServicesSubTitle />
      </div>

      <Carousel items={cards} />
    </div>
  );
}
const ServiceContent:React.FC = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            {/* <Image
              src=" "
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
        );
      })}
    </>
  );
};
export default ServiceContent;

 