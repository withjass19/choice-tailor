import ItemCard from "@/components/ItemCard/ItemCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

import { IoAirplane } from "react-icons/io5";

export default function PopularItems({ products = [], loading = false }) {
  const hasProducts = products.length > 0;

  return (
    <section className="w-full px-4 py-12 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-[#061735] sm:text-3xl lg:text-4xl">
            Popular Items
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b89b3c] sm:w-20" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-12 bg-[#b89b3c] sm:w-20" />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          {loading ? (
            <p className="text-sm text-gray-500">Loading popular products...</p>
          ) : !hasProducts ? (
            <p className="text-sm text-gray-500">No popular products found.</p>
          ) : (
            <Carousel
              opts={{
                align: "start",
                loop: products.length > 5,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 p-4">
                {products.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="basis-1/2 pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                  >
                    <ItemCard
                      id={item.id}
                      src={item.images?.[0]}
                      categroy={item.product_name}
                      price={item.price}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden -left-4 sm:flex lg:-left-6" />
              <CarouselNext className="hidden -right-4 sm:flex lg:-right-6" />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}