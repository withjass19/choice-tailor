import Categories from "./_components/Categories";
import HeroSection from "./_components/HeroSection";
import OrderSteps from "./_components/OrderSteps";
import PopularItems from "./_components/PopularItems";
import TestimonialsSection from "./_components/TestimonialSection";
import WhyChooseSection from "./_components/WhyChooseSection";

import { useHomePageData } from "@/hooks/useHomePageData";

export default function Home() {
  const { popularProducts, categories, loadingCategories, loadingProducts } =
    useHomePageData();

  return (
    <div className="w-full">
      <HeroSection />
      <Categories categories={categories} loading={loadingCategories} />
      <OrderSteps />
      <PopularItems products={popularProducts} loading={loadingProducts} />
      <WhyChooseSection />
      <TestimonialsSection />
    </div>
  );
}
