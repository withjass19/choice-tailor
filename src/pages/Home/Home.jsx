// import Footer from "@/components/Footer/Footer";
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import Categories from "./_components/Categories";
import HeroSection from "./_components/HeroSection";
import OrderSteps from "./_components/OrderSteps";
import PopularItems from "./_components/PopularItems";
import TestimonialsSection from "./_components/TestimonialSection";
import WhyChooseSection from "./_components/WhyChooseSection";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("status", "Active")
        // .eq("featured_product", true)
        .limit(12);

      console.log("Popular Products:", data); // Log the fetched data for debugging

      setPopularProducts(data || []);
    };

    fetchPopularProducts();
  }, []);

  return (
    <div className="w-[100%]">
      <HeroSection />
      <Categories />
      <OrderSteps />
      <PopularItems products={popularProducts} />
      <WhyChooseSection />
      <TestimonialsSection />
      <ImageUpload />
      {/* <Footer/> */}
    </div>
  );
}
