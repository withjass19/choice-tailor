import { useState } from "react";
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
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

  const methods = useForm({
    defaultValues: {
      productName: "",
      sku: "",
      category: "",
      subCategory: "",
      shortDescription: "",
      detailedDescription: "",
      price: "",
      comparePrice: "",
      costPrice: "",
      stockQuantity: "",
      lowStockAlert: "",
      trackInventory: true,
      brand: "",
      fabric: "",
      color: "",
      sizeType: "Numeric",
      gender: "Unisex",
      season: "All Season",
      fit: "Regular Fit",
      productWeight: "",
      careInstructions: "",
      status: "Active",
      featuredProduct: false,
      bestSeller: false,
      newArrival: false,
      allowBackorders: false,
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
      productTags: "",
      metaTitle: "",
      metaDescription: "",
      slug: "",
      internalNotes: "",
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

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const finalProductData = {
        ...formData,
        images: uploadedImageUrls,
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
              uploadedImageUrls={uploadedImageUrls}
              setUploadedImageUrls={setUploadedImageUrls}
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