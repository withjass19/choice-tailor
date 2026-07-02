import { useEffect, useState } from "react";
import {
  Search,
  Filter,
  Download,
  Plus,
  ChevronDown,
  MoreVertical,
  Package,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Box,
  Pencil,
  Grid3X3,
  List,
  ArrowUp,
  ArrowDown,
  Eye,
  Copy,
  Trash2,
  Archive,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function AdminProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function loadProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (ignore) return;

      if (error) {
        console.error("Products fetch error:", error);
        return;
      }

      setProducts(data ?? []);
    }

    loadProducts();

    return () => {
      ignore = true;
    };
  }, []);

  const refreshProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Products refresh error:", error);
      return;
    }

    setProducts(data ?? []);
  };

  const duplicateProduct = async (id) => {
    try {
      const { data: product, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      const productWithoutAutoFields = { ...product };

      delete productWithoutAutoFields.id;
      delete productWithoutAutoFields.created_at;
      delete productWithoutAutoFields.updated_at;

      const duplicate = {
        ...productWithoutAutoFields,
        product_name: `${product.product_name} (Copy)`,
        sku: `${product.sku}-COPY-${Date.now()}`,
        status: "Draft",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const { error: insertError } = await supabase
        .from("products")
        .insert(duplicate);

      if (insertError) throw insertError;

      await refreshProducts();
      alert("Product duplicated successfully.");
    } catch (error) {
      console.error("Duplicate failed:", error);
      alert("Failed to duplicate product.");
    }
  };

  const archiveProduct = async (id) => {
    const { error } = await supabase
      .from("products")
      .update({
        status: "Archived",
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error("Archive failed:", error);
      return;
    }

    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Archived" } : item,
      ),
    );
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      console.error("Delete failed:", error);
      return;
    }

    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.status === "Active").length;

  const outOfStock = products.filter(
    (p) => Number(p.stock_quantity) === 0 || p.status === "Out of Stock",
  ).length;

  const lowStock = products.filter(
    (p) =>
      Number(p.stock_quantity) > 0 &&
      Number(p.stock_quantity) <= Number(p.low_stock_alert || 5),
  ).length;

  const draftProducts = products.filter((p) => p.status === "Draft").length;

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      change: "12.5%",
      trend: "up",
      icon: Package,
      bg: "bg-gray-100",
      color: "text-[#061735]",
    },
    {
      title: "Active Products",
      value: activeProducts,
      change: "10.3%",
      trend: "up",
      icon: CheckCircle,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Out of Stock",
      value: outOfStock,
      change: "14.3%",
      trend: "down",
      icon: XCircle,
      bg: "bg-red-100",
      color: "text-red-600",
    },
    {
      title: "Low Stock",
      value: lowStock,
      change: "9.1%",
      trend: "down",
      icon: AlertTriangle,
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
    {
      title: "Draft Products",
      value: draftProducts,
      change: "3.2%",
      trend: "up",
      icon: Box,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">Dashboard › Products</p>

          <h1 className="mt-3 text-3xl font-bold text-[#061735]">Products</h1>

          <p className="mt-1 text-sm text-gray-600">
            Manage all products in your store.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
            <Download size={17} />
            Export Products
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/products/add-new-product")}
            className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 text-sm font-semibold text-white"
          >
            <Plus size={17} />
            Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((item) => {
          const Icon = item.icon;
          const isUp = item.trend === "up";

          return (
            <div
              key={item.title}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.bg} ${item.color}`}
                >
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#061735]">
                    {item.title}
                  </p>

                  <h3 className="mt-1 font-serif text-3xl font-bold text-[#061735]">
                    {item.value}
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1 text-sm">
                {isUp ? (
                  <ArrowUp size={16} className="text-green-600" />
                ) : (
                  <ArrowDown size={16} className="text-red-600" />
                )}

                <span className={isUp ? "text-green-600" : "text-red-600"}>
                  {item.change}
                </span>

                <span className="text-gray-500">from last 30 days</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr_0.8fr_auto_auto]">
        <div className="relative">
          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#061735]"
          />

          <input
            placeholder="Search by product name, SKU, category..."
            className="w-full rounded-lg border bg-white px-4 py-3 pr-11 text-sm outline-none"
          />
        </div>

        <SelectBox label="All Categories" />
        <SelectBox label="All Status" />
        <SelectBox label="Measurement Required" />
        <SelectBox label="All Stock Status" />

        <button className="flex items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
          <Filter size={17} />
          Filter
        </button>

        <div className="flex overflow-hidden rounded-lg border bg-white">
          <button className="px-3">
            <Grid3X3 size={18} />
          </button>

          <button className="bg-[#061735] px-3 text-white">
            <List size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-xs uppercase text-[#061735]">
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">SKU</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Price</th>
                <th className="px-5 py-4">Stock</th>
                <th className="px-5 py-4">Measurement Required</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Created On</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item) => {
                const stock = Number(item.stock_quantity || 0);
                const lowStockAlert = Number(item.low_stock_alert || 5);

                const stockStatus =
                  stock === 0
                    ? "Out of Stock"
                    : stock <= lowStockAlert
                      ? "Low Stock"
                      : "In Stock";

                return (
                  <tr key={item.id} className="border-b last:border-b-0">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.images?.[0]}
                          alt={item.product_name}
                          className="h-14 w-14 rounded-lg object-cover"
                        />

                        <div>
                          <p className="font-semibold text-[#061735]">
                            {item.product_name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {item.short_description}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 font-semibold">{item.sku}</td>

                    <td className="px-5 py-4">{item.category}</td>

                    <td className="px-5 py-4 font-semibold">
                      ₹{item.price}
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-semibold">{stock}</p>

                      <p
                        className={`text-xs ${
                          stockStatus === "In Stock"
                            ? "text-green-600"
                            : stockStatus === "Low Stock"
                              ? "text-orange-600"
                              : "text-red-600"
                        }`}
                      >
                        {stockStatus}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      {item.measurement_required ? (
                        <span className="inline-flex items-center gap-2 text-green-700">
                          <CheckCircle size={16} /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-gray-500">
                          <XCircle size={16} /> No
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge type={item.status}>{item.status}</StatusBadge>
                    </td>

                    <td className="px-5 py-4">
                      {new Date(item.created_at).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            navigate(`/admin/products/${item.id}/edit`)
                          }
                          className="rounded-lg border p-2 hover:bg-gray-50"
                        >
                          <Pencil size={17} />
                        </button>

                        <DropdownMenu>
                          <DropdownMenuTrigger className="rounded-lg border p-2 hover:bg-gray-50">
                            {/* <button
                              type="button"
                              
                            > */}
                              <MoreVertical size={17} />
                            {/* </button> */}
                          </DropdownMenuTrigger>

                          <DropdownMenuContent align="end" className="w-52">
                            <DropdownMenuItem
                              onClick={() =>
                                navigate(`/admin/products/${item.id}/view`)
                              }
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              View Product
                            </DropdownMenuItem>

                            <DropdownMenuItem
                              onClick={() =>
                                navigate(`/admin/products/${item.id}/edit`)
                              }
                            >
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit Product
                            </DropdownMenuItem>

                            <DropdownMenuItem
                              onClick={() => duplicateProduct(item.id)}
                            >
                              <Copy className="mr-2 h-4 w-4" />
                              Duplicate
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                              onClick={() => archiveProduct(item.id)}
                            >
                              <Archive className="mr-2 h-4 w-4" />
                              Archive
                            </DropdownMenuItem>

                            <DropdownMenuItem
                              onClick={() => deleteProduct(item.id)}
                              className="text-red-600 focus:text-red-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            Showing 1 to {products.length} of {products.length} products
          </p>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border px-4 py-2 text-sm">
              10 per page
              <ChevronDown size={14} className="ml-2 inline" />
            </button>

            <button className="h-9 w-9 rounded-lg border bg-[#061735] text-sm text-white">
              1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectBox({ label }) {
  return (
    <button className="flex items-center justify-between rounded-lg border bg-white px-4 py-3 text-sm">
      {label}
      <ChevronDown size={16} />
    </button>
  );
}

function StatusBadge({ children, type }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    "Out of Stock": "bg-red-100 text-red-700",
    Draft: "bg-gray-100 text-gray-700",
    Archived: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[type] || "bg-gray-100 text-gray-700"
      }`}
    >
      {children}
    </span>
  );
}