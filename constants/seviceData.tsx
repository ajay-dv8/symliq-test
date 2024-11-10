import React from 'react';

const ServiceContent = React.lazy(() => import("@/app/_components/services")); 

interface Service {
  category: string,
  title: string,
  src: string,
  content: JSX.Element,
}

export const services: Service[] = [
  {
    category: "Mobile Applications",
    title: "Do more with mobile.",
    src: "/images/mob.jpg",
    content: <ServiceContent />,
  },
  {
    category: "Web Development",
    title: "Boost your online presence and connect with the world. ",
    src: "/images/web.jpg",
    content: <ServiceContent />,
  },
  {
    category: "Enterprise Applications",
    title: "Enhance your productivity.",
    src: "/images/ent.jpg",
    content: <ServiceContent />,
  },

  {
    category: "Graphic Design",
    title: "Impactful visuals to captivate audiences.",
    src: "/images/graphics.jpg",
    content: <ServiceContent />,
  },
  {
    category: "eCommerce",
    title: "connect with customers worldwide",
    src: "/images/com1.jpg",
    content: <ServiceContent />,
  }, 
];
