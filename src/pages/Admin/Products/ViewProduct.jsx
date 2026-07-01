import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Pencil,
  Package,
//   CheckCircle,
//   XCircle,
  IndianRupee,
//   Ruler,
//   Truck,
//   Tag,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

export default function ViewProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Product fetch failed:", error);
        return;
      }

      setProduct(data);
      setActiveImage(data?.images?.[0] || "");
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Dashboard › Products › View Product
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#061735]">
            {product.product_name}
          </h1>

          <p className="mt-1 text-sm text-gray-600">{product.sku}</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/admin/products")}
            className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <button
            onClick={() => navigate(`/admin/products/${product.id}/edit`)}
            className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 text-sm font-semibold text-white"
          >
            <Pencil size={17} />
            Edit Product
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5 rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex h-[430px] items-center justify-center overflow-hidden rounded-xl border bg-gray-50">
            {activeImage ? (
              <img
                src={activeImage}
                alt={product.product_name}
                className="h-full w-full object-cover"
              />
            ) : (
              <Package size={70} className="text-gray-300" />
            )}
          </div>

          <div className="grid grid-cols-5 gap-3">
            {(product.images || []).map((image) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                className={`h-20 overflow-hidden rounded-lg border ${
                  activeImage === image ? "border-[#061735]" : ""
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card title="Basic Information">
            <Info label="Product Name" value={product.product_name} />
            <Info label="SKU" value={product.sku} />
            <Info label="Category" value={product.category} />
            <Info label="Sub Category" value={product.sub_category} />
            <Info
              label="Short Description"
              value={product.short_description}
            />
          </Card>

          <Card title="Pricing & Stock">
            <div className="grid gap-4 sm:grid-cols-2">
              <Metric
                icon={<IndianRupee size={20} />}
                label="Price"
                value={`₹${product.price || 0}`}
              />
              <Metric
                icon={<Package size={20} />}
                label="Stock"
                value={product.stock_quantity || 0}
              />
            </div>

            <Info label="Compare Price" value={product.compare_price} />
            <Info label="Cost Price" value={product.cost_price} />
            <Info label="Low Stock Alert" value={product.low_stock_alert} />
          </Card>

          <Card title="Product Status">
            <Info label="Status" value={product.status} />
            <Info
              label="Featured Product"
              value={product.featured_product ? "Yes" : "No"}
            />
            <Info
              label="Best Seller"
              value={product.best_seller ? "Yes" : "No"}
            />
            <Info
              label="New Arrival"
              value={product.new_arrival ? "Yes" : "No"}
            />
          </Card>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Product Details">
          <Info label="Brand" value={product.brand} />
          <Info label="Fabric" value={product.fabric} />
          <Info label="Color" value={product.color} />
          <Info label="Size Type" value={product.size_type} />
          <Info label="Gender" value={product.gender} />
          <Info label="Season" value={product.season} />
          <Info label="Fit" value={product.fit} />
          <Info label="Care Instructions" value={product.care_instructions} />
        </Card>

        <Card title="Measurement Settings">
          <Info
            label="Measurement Required"
            value={product.measurement_required ? "Yes" : "No"}
          />
          <Info
            label="Allow Standard Sizes"
            value={product.allow_standard_sizes ? "Yes" : "No"}
          />
          <Info
            label="Allow Custom Notes"
            value={product.allow_custom_notes ? "Yes" : "No"}
          />
          <Info
            label="Measurement Template"
            value={product.measurement_template}
          />

          <div>
            <p className="text-sm font-semibold text-[#061735]">
              Measurement Fields
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {(product.measurement_fields || []).map((field) => (
                <span
                  key={field}
                  className="rounded-full bg-[#f6efe1] px-3 py-1 text-xs font-semibold text-[#b89b3c]"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </Card>

        <Card title="Shipping Details">
          <Info label="Shipping Weight" value={product.shipping_weight} />
          <Info label="Package Length" value={product.package_length} />
          <Info label="Package Width" value={product.package_width} />
          <Info label="Package Height" value={product.package_height} />
          <Info label="Shipping Class" value={product.shipping_class} />
          <Info label="Delivery Time" value={product.delivery_time} />
          <Info label="Return Policy" value={product.return_policy} />
          <Info label="Warranty" value={product.warranty} />
          <Info label="Shipping Notes" value={product.shipping_notes} />
        </Card>

        <Card title="SEO & Additional Information">
          <Info label="Product Tags" value={product.product_tags} />
          <Info label="Meta Title" value={product.meta_title} />
          <Info label="Meta Description" value={product.meta_description} />
          <Info label="Slug" value={product.slug} />
          <Info label="Internal Notes" value={product.internal_notes} />
        </Card>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-bold text-[#061735]">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between gap-5 border-b pb-3 last:border-b-0 last:pb-0">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="max-w-[60%] text-right text-sm font-semibold text-[#061735]">
        {value || "—"}
      </p>
    </div>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="rounded-lg border bg-gray-50 p-4">
      <div className="flex items-center gap-3 text-[#061735]">
        {icon}
        <p className="text-sm font-semibold">{label}</p>
      </div>
      <h3 className="mt-3 text-2xl font-bold text-[#061735]">{value}</h3>
    </div>
  );
}