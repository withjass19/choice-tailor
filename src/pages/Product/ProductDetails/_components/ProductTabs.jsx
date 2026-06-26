import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function ProductTabs() {
  return (
    <div className="mt-12 border rounded-xl p-8">

      <Tabs defaultValue="description">

        <TabsList>
          <TabsTrigger value="description">
            Product Description
          </TabsTrigger>

          <TabsTrigger value="fabric">
            Fabric & Care
          </TabsTrigger>

          <TabsTrigger value="size">
            Size Guide
          </TabsTrigger>

          <TabsTrigger value="delivery">
            Delivery & Returns
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description">
          Product Description Here...
        </TabsContent>

        <TabsContent value="fabric">
          Fabric Details...
        </TabsContent>

      </Tabs>
    </div>
  );
}