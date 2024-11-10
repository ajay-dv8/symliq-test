import { BorderBeam } from "@/components/ui/border-beam-card";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  link: string ;
}

export function ProductCard({ image, title, description, link }: ProductCardProps) {
  return (
    <Link href={link} className="m-4 p-8 relative flex h-[21rem] w-[21rem] flex-col gap-y-4 items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl hover:scale-105 transition-all ease-in-out duration-500"> 
      <Image 
        alt={title} 
        src={image}
        width={75}
        height={75}
        className=""
      />
      <h3 className="text-xl md:text-3xl text-blue font-light font-sans">
        {title}
      </h3>

      <p className="text-center text-gray-600">
        {description}
      </p>
      <BorderBeam size={250} duration={12} delay={9} />
    </Link>
  );
}

