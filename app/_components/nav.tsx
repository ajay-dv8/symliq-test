"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, MonitorCog, ShoppingBag, User2 } from "lucide-react"; 
import { Header } from "./header"; 
import Link from "next/link";
import Image from "next/image";

export function NavSection() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Service",
      link: "/service",
      icon: <MonitorCog className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Product",
      link: "/product",
      icon: (
        <ShoppingBag className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full ">
      <div className="pt-5 px-4 ">
        <Link href="/" className="block md:hidden">
          <Image 
            src="/images/logo.png" 
            alt="" 
            width="50" 
            height="50"
            className="ml-0 pl-0"
          />
        </Link>
        <FloatingNav navItems={navItems} /> 
      </div>  
      <div className="mt-4 hidden md:block">
        <Header /> 
      </div>
    </div>
  );
}
