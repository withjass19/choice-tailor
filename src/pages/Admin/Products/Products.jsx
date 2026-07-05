import { useEffect, useMemo, useState } from "react";
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
  RotateCcw,
  FileDown,
  CalendarDays,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Pagination from "@/components/common/Pagination";
import StatusBadge from "@/components/common/StatusBadge";
import { supabase } from "@/lib/supabase";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import ExportProductsDialog from "./_components/ExportProductsDialog";

export default function AdminProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [measurementFilter, setMeasurementFilter] = useState("all");
  const [stockFilter, setStockFilter] = useState("all");
  const [exportOpen, setExportOpen] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function loadProducts() {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("created_at", { ascending: false });

        if (ignore) return;
        if (error) throw error;

        setProducts(data || []);
      } catch (error) {
        console.error("Products fetch error:", error);
        toast.error("Failed to load products.");
      } finally {
        if (!ignore) setLoading(false);
      }
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
      toast.error("Failed to refresh products.");
      return;
    }

    setProducts(data || []);
  };

  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category).filter(Boolean))];
  }, [products]);

  const getStockStatus = (product) => {
    const stock = Number(product.stock_quantity || 0);
    const alert = Number(product.low_stock_alert || 5);

    if (stock === 0 || product.status === "Out of Stock") return "out";
    if (stock > 0 && stock <= alert) return "low";
    return "in";
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter((product) => {
        return (
          product.product_name?.toLowerCase().includes(keyword) ||
          product.sku?.toLowerCase().includes(keyword) ||
          product.category?.toLowerCase().includes(keyword)
        );
      });
    }

    if (categoryFilter !== "all") {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (statusFilter !== "all") {
      result = result.filter((p) => p.status === statusFilter);
    }

    if (measurementFilter !== "all") {
      result = result.filter((p) =>
        measurementFilter === "required"
          ? p.measurement_required === true
          : p.measurement_required === false,
      );
    }

    if (stockFilter !== "all") {
      result = result.filter((p) => getStockStatus(p) === stockFilter);
    }

    return result;
  }, [
    products,
    search,
    categoryFilter,
    statusFilter,
    measurementFilter,
    stockFilter,
  ]);

  const getExportDateRange = (type) => {
    const now = new Date();
    const start = new Date();

    if (type === "today") start.setHours(0, 0, 0, 0);
    if (type === "week") start.setDate(now.getDate() - 7);
    if (type === "month") start.setMonth(now.getMonth() - 1);
    if (type === "three_months") start.setMonth(now.getMonth() - 3);
    if (type === "year") start.setFullYear(now.getFullYear() - 1);

    return { start, end: now };
  };

  const filterByDate = (data, dateRange, customRange) => {
    if (dateRange === "all") return data;

    let start;
    let end;

    if (dateRange === "custom") {
      start = new Date(customRange.start);
      end = new Date(customRange.end);
      end.setHours(23, 59, 59, 999);
    } else {
      const range = getExportDateRange(dateRange);
      start = range.start;
      end = range.end;
    }

    return data.filter((product) => {
      if (!product.created_at) return false;

      const createdAt = new Date(product.created_at);
      return createdAt >= start && createdAt <= end;
    });
  };

  const exportProducts = (
    type = "filtered",
    dateRange = "all",
    customRange = null,
  ) => {
    let exportData = [];

    if (type === "all") {
      exportData = products;
    } else if (type === "low_stock") {
      exportData = products.filter((p) => getStockStatus(p) === "low");
    } else if (type === "out_of_stock") {
      exportData = products.filter((p) => getStockStatus(p) === "out");
    } else {
      exportData = filteredProducts;
    }

    exportData = filterByDate(exportData, dateRange, customRange);

    if (exportData.length === 0) {
      toast.error("No products available to export.");
      return;
    }

    const rows = exportData.map((product, index) => ({
      sr_no: index + 1,
      product_name: product.product_name || "",
      sku: product.sku || "",
      category: product.category || "",
      sub_category: product.sub_category || "",
      price: product.price || 0,
      stock_quantity: product.stock_quantity || 0,
      low_stock_alert: product.low_stock_alert || 0,
      stock_status: getStockStatus(product),
      measurement_required: product.measurement_required ? "Yes" : "No",
      status: product.status || "",
      created_at: product.created_at
        ? new Date(product.created_at).toLocaleString("en-IN")
        : "",
    }));

    const headers = Object.keys(rows[0]);

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        headers
          .map((header) => `"${String(row[header]).replaceAll('"', '""')}"`)
          .join(","),
      ),
    ].join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const today = new Date().toISOString().split("T")[0];

    link.href = url;
    link.download = `choice-tailor-${type}-${dateRange}-products-${today}.csv`;
    link.click();

    URL.revokeObjectURL(url);

    toast.success(`${exportData.length} products exported.`);
  };

  const duplicateProduct = async (id) => {
    try {
      const { data: product, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      const duplicate = { ...product };

      delete duplicate.id;
      delete duplicate.created_at;
      delete duplicate.updated_at;

      const { error: insertError } = await supabase.from("products").insert({
        ...duplicate,
        product_name: `${product.product_name} (Copy)`,
        sku: `${product.sku || "SKU"}-COPY-${Date.now()}`,
        status: "Draft",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      if (insertError) throw insertError;

      await refreshProducts();
      toast.success("Product duplicated successfully.");
    } catch (error) {
      console.error("Duplicate failed:", error);
      toast.error("Failed to duplicate product.");
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
      toast.error("Failed to archive product.");
      return;
    }

    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Archived" } : item,
      ),
    );

    toast.success("Product archived.");
  };

  const restoreProduct = async (id) => {
    const { error } = await supabase
      .from("products")
      .update({
        status: "Active",
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error("Restore failed:", error);
      toast.error("Failed to restore product.");
      return;
    }

    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Active" } : item,
      ),
    );

    toast.success("Product restored.");
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete product.");
      return;
    }

    setProducts((prev) => prev.filter((item) => item.id !== id));
    toast.success("Product deleted.");
  };

  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.status === "Active").length;
  const archivedProducts = products.filter((p) => p.status === "Archived").length;
  const outOfStock = products.filter((p) => getStockStatus(p) === "out").length;
  const lowStock = products.filter((p) => getStockStatus(p) === "low").length;
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold"
              >
                <Download size={17} />
                Export Products
                <ChevronDown size={15} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuItem onClick={() => exportProducts("filtered", "all")}>
                <FileDown className="mr-2 h-4 w-4" />
                Export Filtered
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => exportProducts("all", "all")}>
                <FileDown className="mr-2 h-4 w-4" />
                Export All Products
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => exportProducts("filtered", "today")}>
                <CalendarDays className="mr-2 h-4 w-4" />
                Today
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => exportProducts("filtered", "week")}>
                Last 7 Days
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => exportProducts("filtered", "month")}>
                Last 30 Days
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => exportProducts("filtered", "three_months")}
              >
                Last 3 Months
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => exportProducts("filtered", "year")}>
                Last 1 Year
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setExportOpen(true)}>
                Custom Date Range
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => exportProducts("low_stock", "all")}>
                <AlertTriangle className="mr-2 h-4 w-4" />
                Low Stock
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => exportProducts("out_of_stock", "all")}
              >
                <XCircle className="mr-2 h-4 w-4" />
                Out of Stock
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
            <div key={item.title} className="rounded-xl border bg-white p-5 shadow-sm">
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
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by product name, SKU, category..."
            className="w-full rounded-lg border bg-white px-4 py-3 pr-11 text-sm outline-none"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(event) => setCategoryFilter(event.target.value)}
          className="rounded-lg border bg-white px-4 py-3 text-sm outline-none"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="rounded-lg border bg-white px-4 py-3 text-sm outline-none"
        >
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Draft">Draft</option>
          <option value="Archived">Archived</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <select
          value={measurementFilter}
          onChange={(event) => setMeasurementFilter(event.target.value)}
          className="rounded-lg border bg-white px-4 py-3 text-sm outline-none"
        >
          <option value="all">Measurement Required</option>
          <option value="required">Required</option>
          <option value="not_required">Not Required</option>
        </select>

        <select
          value={stockFilter}
          onChange={(event) => setStockFilter(event.target.value)}
          className="rounded-lg border bg-white px-4 py-3 text-sm outline-none"
        >
          <option value="all">All Stock Status</option>
          <option value="in">In Stock</option>
          <option value="low">Low Stock</option>
          <option value="out">Out of Stock</option>
        </select>

        <button
          type="button"
          onClick={() => {
            setSearch("");
            setCategoryFilter("all");
            setStatusFilter("all");
            setMeasurementFilter("all");
            setStockFilter("all");
          }}
          className="flex items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold"
        >
          <Filter size={17} />
          Reset
        </button>

        <div className="flex overflow-hidden rounded-lg border bg-white">
          <button type="button" className="px-3">
            <Grid3X3 size={18} />
          </button>

          <button type="button" className="bg-[#061735] px-3 text-white">
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
              {loading ? (
                <tr>
                  <td colSpan={9} className="px-5 py-10 text-center text-gray-500">
                    Loading products...
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-5 py-10 text-center text-gray-500">
                    No products found.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((item) => {
                  const stock = Number(item.stock_quantity || 0);
                  const stockStatus = getStockStatus(item);

                  const stockLabel = {
                    in: "In Stock",
                    low: "Low Stock",
                    out: "Out of Stock",
                  }[stockStatus];

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

                            <p className="max-w-[260px] truncate text-xs text-gray-500">
                              {item.short_description}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4 font-semibold">{item.sku || "-"}</td>

                      <td className="px-5 py-4">{item.category || "-"}</td>

                      <td className="px-5 py-4 font-semibold">
                        ₹{Number(item.price || 0).toLocaleString("en-IN")}
                      </td>

                      <td className="px-5 py-4">
                        <p className="font-semibold">{stock}</p>

                        <p
                          className={`text-xs ${
                            stockStatus === "in"
                              ? "text-green-600"
                              : stockStatus === "low"
                                ? "text-orange-600"
                                : "text-red-600"
                          }`}
                        >
                          {stockLabel}
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
                        {item.created_at
                          ? new Date(item.created_at).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : "-"}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => navigate(`/admin/products/${item.id}/edit`)}
                            className="rounded-lg border p-2 hover:bg-gray-50"
                          >
                            <Pencil size={17} />
                          </button>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button
                                type="button"
                                className="rounded-lg border p-2 hover:bg-gray-50"
                              >
                                <MoreVertical size={17} />
                              </button>
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

                              {item.status === "Archived" ? (
                                <DropdownMenuItem
                                  onClick={() => restoreProduct(item.id)}
                                >
                                  <RotateCcw className="mr-2 h-4 w-4" />
                                  Restore
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem
                                  onClick={() => archiveProduct(item.id)}
                                >
                                  <Archive className="mr-2 h-4 w-4" />
                                  Archive
                                </DropdownMenuItem>
                              )}

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
                })
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          page={1}
          setPage={() => {}}
          totalItems={filteredProducts.length}
          totalPages={1}
          pageSize={10}
          setPageSize={() => {}}
          label={`products${archivedProducts > 0 ? ` • ${archivedProducts} archived` : ""}`}
          className="rounded-b-xl border-x border-b"
        />
      </div>

      <ExportProductsDialog
        open={exportOpen}
        setOpen={setExportOpen}
        onExport={exportProducts}
      />
    </div>
  );
}

