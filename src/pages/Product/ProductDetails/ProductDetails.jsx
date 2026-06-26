import ProductFeatures from "./_components/ProductFeature";
import ProductGallery from "./_components/ProductGallery";
import ProductInfo from "./_components/ProductInfo";
import ProductTabs from "./_components/ProductTabs";
import RelatedProducts from "./_components/RelatedProducts";

export default function ProductDetails() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          Home / Uniforms / IAF Working Dress / IAF Working Shirt
        </div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10">
          <ProductGallery/>
          <ProductInfo/>
        </div>
        
        <ProductFeatures/>
        <ProductTabs/>
        <RelatedProducts/>
        
      </div>
    </section>
  );
}