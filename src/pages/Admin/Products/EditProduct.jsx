import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { supabase } from "@/lib/supabase";

import BasicInformation from "./_components/BasicInformation";
import ProductImages from "./_components/ProductImages";
import PricingStock from "./_components/PricingStock";
import ProductDetails from "./_components/ProductDetails";
import ProductStatus from "./_components/ProductStatus";
import MeasurementSettings from "./_components/MeasurementSettings";
import AdditionalInformation from "./_components/AdditionalInformation";
import ShippingDetails from "./_components/ShippingDetails";
import FormActions from "./_components/FormActions";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

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
      measurementFields: [],

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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setPageLoading(true);

        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;

        methods.reset({
          productName: data.product_name || "",
          sku: data.sku || "",
          category: data.category || "",
          subCategory: data.sub_category || "",
          shortDescription: data.short_description || "",
          detailedDescription: data.detailed_description || "",

          price: data.price || "",
          comparePrice: data.compare_price || "",
          costPrice: data.cost_price || "",
          stockQuantity: data.stock_quantity || "",
          lowStockAlert: data.low_stock_alert || "",
          trackInventory: data.track_inventory ?? true,

          brand: data.brand || "",
          fabric: data.fabric || "",
          color: data.color || "",
          sizeType: data.size_type || "Numeric",
          gender: data.gender || "Unisex",
          season: data.season || "All Season",
          fit: data.fit || "Regular Fit",
          productWeight: data.product_weight || "",
          careInstructions: data.care_instructions || "",

          status: data.status || "Active",
          featuredProduct: data.featured_product ?? false,
          bestSeller: data.best_seller ?? false,
          newArrival: data.new_arrival ?? false,
          allowBackorders: data.allow_backorders ?? false,

          measurementRequired: data.measurement_required ?? true,
          allowStandardSizes: data.allow_standard_sizes ?? true,
          allowCustomNotes: data.allow_custom_notes ?? true,
          measurementTemplate:
            data.measurement_template || "Shirt & Trouser Measurements",
          measurementFields: data.measurement_fields || [],

          productTags: data.product_tags || "",
          metaTitle: data.meta_title || "",
          metaDescription: data.meta_description || "",
          slug: data.slug || "",
          internalNotes: data.internal_notes || "",

          shippingWeight: data.shipping_weight || "",
          packageLength: data.package_length || "",
          packageWidth: data.package_width || "",
          packageHeight: data.package_height || "",
          shippingClass: data.shipping_class || "Standard Shipping",
          deliveryTime: data.delivery_time || "",
          returnPolicy: data.return_policy || "7 Days Return",
          warranty: data.warranty || "",
          shippingNotes: data.shipping_notes || "",
        });

        const existingImages = (data.images || []).map((url) => ({
          file: null,
          preview: url,
          uploaded: true,
          url,
        }));

        setProductImages(existingImages);
        setUploadedImageUrls(data.images || []);
      } catch (error) {
        console.error("Product fetch failed:", error);
      } finally {
        setPageLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

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
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from("products")
        .update(product)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      console.log("Updated Product:", data);

      navigate("/admin/products");
    } catch (error) {
      console.error("Product update failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <FormActions loading={loading} isEdit />

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