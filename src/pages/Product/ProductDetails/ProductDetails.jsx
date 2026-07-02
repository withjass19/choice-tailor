import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { supabase } from "@/lib/supabase";

import ProductFeatures from "./_components/ProductFeature";
import ProductGallery from "./_components/ProductGallery";
import ProductInfo from "./_components/ProductInfo";
import ProductTabs from "./_components/ProductTabs";
import RelatedProducts from "./_components/RelatedProducts";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;

        setProduct(data);
      } catch (error) {
        console.error("Product fetch failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center">Loading product...</div>;
  }

  if (!product) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-8 text-sm text-gray-500">
          Home / {product.category} / {product.sub_category} /{" "}
          {product.product_name}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        <ProductFeatures product={product} />
        <ProductTabs product={product} />
        <RelatedProducts product={product} />
      </div>
    </section>
  );
}