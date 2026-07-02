import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function ProductTabs({ product }) {
  return (
    <div className="mt-12 rounded-xl border p-8">
      <Tabs defaultValue="description">
        <TabsList>
          <TabsTrigger value="description">Product Description</TabsTrigger>
          <TabsTrigger value="fabric">Fabric & Care</TabsTrigger>
          <TabsTrigger value="size">Size Guide</TabsTrigger>
          <TabsTrigger value="delivery">Delivery & Returns</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6 text-gray-600">
          {product?.detailed_description || product?.short_description || "No description available."}
        </TabsContent>

        <TabsContent value="fabric" className="mt-6 text-gray-600">
          <p><b>Fabric:</b> {product?.fabric || "—"}</p>
          <p className="mt-2"><b>Care:</b> {product?.care_instructions || "—"}</p>
        </TabsContent>

        <TabsContent value="size" className="mt-6 text-gray-600">
          <p><b>Size Type:</b> {product?.size_type || "—"}</p>
          <p className="mt-2"><b>Measurement Template:</b> {product?.measurement_template || "—"}</p>
        </TabsContent>

        <TabsContent value="delivery" className="mt-6 text-gray-600">
          <p><b>Delivery:</b> {product?.delivery_time || "—"}</p>
          <p className="mt-2"><b>Return Policy:</b> {product?.return_policy || "—"}</p>
          <p className="mt-2"><b>Warranty:</b> {product?.warranty || "—"}</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}