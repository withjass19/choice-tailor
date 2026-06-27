import { useState } from "react";
import { upload } from "@imagekit/react";
import { FormProvider, useForm } from "react-hook-form";

import BasicInformation from "./_components/BasicInformation";
import ProductImages from "./_components/ProductImages";
import PricingStock from "./_components/PricingStock";
import ProductDetails from "./_components/ProductDetails";
import ProductStatus from "./_components/ProductStatus";
import MeasurementSettings from "./_components/MeasurementSettings";
import AdditionalInformation from "./_components/AdditionalInformation";
import ShippingDetails from "./_components/ShippingDetails";
import FormActions from "./_components/FormActions";

export default function CreateProduct() {
  const [loading, setLoading] = useState(false);
  const [productImages, setProductImages] = useState([]);

  const methods = useForm({
    defaultValues: {
      // Basic Information
      productName: "",
      sku: "",
      category: "",
      subCategory: "",
      shortDescription: "",
      detailedDescription: "",

      // Pricing & Stock
      price: "",
      comparePrice: "",
      costPrice: "",
      stockQuantity: "",
      lowStockAlert: "",
      trackInventory: true,

      // Product Details
      brand: "",
      fabric: "",
      color: "",
      sizeType: "Numeric",
      gender: "Unisex",
      season: "All Season",
      fit: "Regular Fit",
      productWeight: "",
      careInstructions: "",

      // Product Status
      status: "Active",
      featuredProduct: false,
      bestSeller: false,
      newArrival: false,
      allowBackorders: false,

      // Measurement Settings
      measurementRequired: true,
      allowStandardSizes: true,
      allowCustomNotes: true,
      measurementTemplate: "Shirt & Trouser Measurements",
      measurementFields: [
        "Neck",
        "Shoulder",
        "Chest",
        "Sleeve Length",
        "Shirt Length",
        "Waist",
        "Hip",
        "Inseam",
      ],

      // Additional Information
      productTags: "",
      metaTitle: "",
      metaDescription: "",
      slug: "",
      internalNotes: "",

      // Shipping Details
      shippingWeight: "",
      packageLength: "",
      packageWidth: "",
      packageHeight: "",
      shippingClass: "Standard Shipping",
      deliveryTime: "",
      returnPolicy: "7 Days Return",
      warranty: "",
      shippingNotes: "",
    },
  });

  const authenticator = async () => {
    const res = await fetch("/api/imagekit-auth");
    const text = await res.text();

    console.log("ImageKit auth raw response:", text);

    if (!res.ok) throw new Error("ImageKit auth failed");

    return JSON.parse(text);
  };

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const files = productImages.map((img) => img.file);

      const authParams = await authenticator();

      console.log("Auth Params:", authParams);
      console.log("Public Key:", import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY);

      const uploadedImages = await Promise.all(
        files.map((file) =>
          upload({
            file,
            fileName: `${Date.now()}-${file.name}`,
            publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
            signature: authParams.signature,
            expire: authParams.expire,
            token: authParams.token,
            folder: "/choice-tailor/products",
          }),
        ),
      );

      const imageUrls = uploadedImages.map((img) => img.url);

      const finalProductData = {
        ...formData,
        images: imageUrls,
      };

      console.log("Final Product Data:", finalProductData);

      // await supabase.from("products").insert(finalProductData);
    } catch (error) {
      console.error("Product save failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <FormActions loading={loading} />

        <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <BasicInformation />
            <ProductDetails />
            <MeasurementSettings />
          </div>

          <div className="space-y-6">
            <ProductImages
              images={productImages}
              setImages={setProductImages}
            />
            <PricingStock />
            <ProductStatus />
            <AdditionalInformation />
          </div>
        </div>

        <ShippingDetails />
      </form>
    </FormProvider>
  );
}
