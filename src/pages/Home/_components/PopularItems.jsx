import ItemCard from "@/components/ItemCard/ItemCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

import {
  BadgeModel,
  BeltModel,
  CapModel,
  machineModel,
  namePlate,
  RankModel,
  ShirtModel,
  ShoesModel,
} from "../../../assets/images";

import { IoAirplane } from "react-icons/io5";

const CategoriesList = [
  { id: 1, categroy: "IAF Uniforms", image: ShirtModel },
  { id: 2, categroy: "Custom Stitching", image: machineModel },
  { id: 3, categroy: "Caps", image: CapModel },
  { id: 4, categroy: "Belts", image: BeltModel },
  { id: 5, categroy: "Badges", image: BadgeModel },
  { id: 6, categroy: "Name Plates", image: namePlate },
  { id: 7, categroy: "Rank Accessories", image: RankModel },
  { id: 8, categroy: "Shoes", image: ShoesModel },
];

export default function PopularItems() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-[#061735] sm:text-3xl lg:text-4xl">
            Popular Items
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-12 sm:w-20 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-12 sm:w-20 bg-[#b89b3c]" />
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10 flex justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 p-4">
              {CategoriesList.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <ItemCard src={item.image} categroy={item.categroy} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}