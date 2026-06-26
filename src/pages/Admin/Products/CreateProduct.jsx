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
  return (
    <div className="space-y-6">
      <FormActions />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <BasicInformation />
          <ProductDetails />
          <MeasurementSettings />
        </div>

        <div className="space-y-6">
          <ProductImages />
          <PricingStock />
          <ProductStatus />
          <AdditionalInformation />
        </div>
      </div>

      <ShippingDetails />
    </div>
  );
}