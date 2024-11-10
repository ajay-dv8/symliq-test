
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Hero () {
  return (
    <BackgroundBeamsWithCollision className="bg-blue-600"> 
      <div className="uppercase px-8 md:px-24 w-full text-center text-4xl font-black md:text-7xl md:font-black mt-16">
        We turn ideas into reality with <span className="bg-clip-text text-center text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">design and software solutions</span> that drive results.
      </div>
    </BackgroundBeamsWithCollision>
  );
} 

