// import Footer from "@/components/Footer/Footer";
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import Categories from "./_components/Categories";
import HeroSection from "./_components/HeroSection";
import OrderSteps from "./_components/OrderSteps";
import PopularItems from "./_components/PopularItems";
import TestimonialsSection from "./_components/TestimonialSection";
import WhyChooseSection from "./_components/WhyChooseSection";

export default function Home() {
  return (
    <div className="w-[100%]">
      <HeroSection/>
      <Categories/>
      <OrderSteps/>
      <PopularItems/>
      <WhyChooseSection/>
      <TestimonialsSection/>
      <ImageUpload/>
      {/* <Footer/> */}
    </div>
  )
}
