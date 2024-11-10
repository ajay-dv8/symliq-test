// productData.ts
export interface Product {
  image: string;
  title: string;
  description: string;
  link: string | undefined; 
}

export const products: Product[] = [
  {
    image: '/images/products/pappermap.png',
    title: 'Pappermap',
    description: 'Enhancing your educational experience through digitization. An e-learning application with user-friendly features for both teachers and students.',
    link: 'https://pappermap.com',
  },
  {
    image: '/images/products/keystamp.png',
    title: 'Keystamp',
    description: 'The future of customer relations; generation of quotations, responding to customer enquires, inventory management and analytics and so much more.', 
    link: "#",
  }, 
];
