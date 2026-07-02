import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import ItemCard from "@/components/ItemCard/ItemCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function RelatedProducts({ product }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!product) return;

    const fetchRelatedProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("category", product.category)
          .neq("id", product.id)
          .eq("status", "Active")
          .limit(10);

        if (error) throw error;

        setRelatedProducts(data || []);
      } catch (error) {
        console.error("Related products fetch failed:", error);
      }
    };

    fetchRelatedProducts();
  }, [product]);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-center font-serif text-3xl font-bold text-[#061735]">
        You May Also Like
      </h2>

      <Carousel
        className="mt-8"
        opts={{
          align: "start",
          loop: relatedProducts.length > 5,
        }}
      >
        <CarouselContent className="-ml-4">
          {relatedProducts.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <ItemCard
                id={item.id}
                src={item.images?.[0]}
                categroy={item.product_name}
                subCategory={item.sub_category}
                price={item.price}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-5 hidden sm:flex" />
        <CarouselNext className="-right-5 hidden sm:flex" />
      </Carousel>
    </div>
  );
}