import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function RelatedProducts() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-serif font-bold text-center">
        You May Also Like
      </h2>

      <Carousel className="mt-8">
        <CarouselContent>
          {[1,2,3,4,5].map((item)=>(
            <CarouselItem
              key={item}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              Product Card
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}