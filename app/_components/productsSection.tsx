import { ProductCard } from "@/components/productCard";
import { products } from "@/constants/productList";
import { GreenDot } from "./dot";

export function ProductsSection() {
  return (
    <>
      <div className="p-12">
        <GreenDot/> 
        <h2 className="max-w-7xl mx-auto text-3xl md:text-6xl font-sans text-white">
          Our Products
        </h2>
      </div>
    {/* <img src="/svg/black-h-line.svg" alt="" className="h-20" /> */}

      <div className="flex flex-wrap items-center justify-center">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            image={product.image} 
            title={product.title} 
            description={product.description} 
            link={product.link ? product.link : "#"}
          />
        ))}
      </div>
    </>
  );
}
