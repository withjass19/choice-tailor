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
import { supabase } from "@/lib/supabase";

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

      // const finalProductData = {
      //   ...formData,
      //   images: uploadedImageUrls,
      // };

      // console.log("Final Product Data:", finalProductData);
      const product = {
        product_name: formData.productName,
        sku: formData.sku,
        category: formData.category,
        sub_category: formData.subCategory,

        short_description: formData.shortDescription,
        detailed_description: formData.detailedDescription,

        price: Number(formData.price),
        compare_price: Number(formData.comparePrice),
        cost_price: Number(formData.costPrice),

        stock_quantity: Number(formData.stockQuantity),
        low_stock_alert: Number(formData.lowStockAlert),

        track_inventory: formData.trackInventory,

        brand: formData.brand,
        fabric: formData.fabric,
        color: formData.color,

        size_type: formData.sizeType,
        gender: formData.gender,
        season: formData.season,
        fit: formData.fit,

        product_weight: formData.productWeight,
        care_instructions: formData.careInstructions,

        status: formData.status,

        featured_product: formData.featuredProduct,
        best_seller: formData.bestSeller,
        new_arrival: formData.newArrival,
        allow_backorders: formData.allowBackorders,

        measurement_required: formData.measurementRequired,
        allow_standard_sizes: formData.allowStandardSizes,
        allow_custom_notes: formData.allowCustomNotes,

        measurement_template: formData.measurementTemplate,
        measurement_fields: formData.measurementFields,

        product_tags: formData.productTags,
        meta_title: formData.metaTitle,
        meta_description: formData.metaDescription,
        slug: formData.slug,
        internal_notes: formData.internalNotes,

        shipping_weight: formData.shippingWeight,
        package_length: formData.packageLength,
        package_width: formData.packageWidth,
        package_height: formData.packageHeight,

        shipping_class: formData.shippingClass,
        delivery_time: formData.deliveryTime,
        return_policy: formData.returnPolicy,
        warranty: formData.warranty,
        shipping_notes: formData.shippingNotes,

        images: uploadedImageUrls,
      };

      const { data, error } = await supabase
        .from("products")
        .insert(product)
        .select()
        .single();

      if (error) throw error;

      console.log("Saved Product:", data);

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
