import { useCallback, useEffect, useMemo, useState } from "react";
import { Download, FileDown, Plus, CalendarDays } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase";

import CategoryStats from "./_components/CategoryStats";
import CategoryFilters from "./_components/CategoryFilters";
import CategoriesTable from "./_components/CategoriesTable";
import CategoryPagination from "./_components/CategoryPagination";

import AddCategoryDialog from "./_components/AddCategoryDialog";
import EditCategoryDialog from "./_components/EditCategoryDialog";
import DeleteCategoryDialog from "./_components/DeleteCategoryDialog";
import ExportCategoriesDialog from "./_components/ExportCategoriesDialog";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const PER_PAGE = 10;

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [visibility, setVisibility] = useState("all");
  const [featured, setFeatured] = useState("all");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PER_PAGE);

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });

      if (error) throw error;

      setCategories(data || []);
    } catch (error) {
      console.error("Categories fetch failed:", error);
      toast.error("Failed to load categories.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const filteredCategories = useMemo(() => {
    let result = [...categories];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter(
        (item) =>
          item.name?.toLowerCase().includes(keyword) ||
          item.slug?.toLowerCase().includes(keyword),
      );
    }

    if (status !== "all") {
      result = result.filter((item) => item.status === status);
    }

    if (visibility !== "all") {
      result = result.filter((item) =>
        visibility === "visible"
          ? item.show_on_homepage === true
          : item.show_on_homepage === false,
      );
    }

    if (featured !== "all") {
      result = result.filter((item) =>
        featured === "featured"
          ? item.featured === true
          : item.featured === false,
      );
    }

    return result;
  }, [categories, search, status, visibility, featured]);

  const totalPages = Math.ceil(filteredCategories.length / pageSize) || 1;

  const paginatedCategories = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredCategories.slice(start, start + pageSize);
  }, [filteredCategories, page, pageSize]);

  const resetFilters = () => {
    setSearch("");
    setStatus("all");
    setVisibility("all");
    setFeatured("all");
    setPage(1);
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setEditOpen(true);
  };

  const handleDelete = (category) => {
    setSelectedCategory(category);
    setDeleteOpen(true);
  };

  const toggleVisibility = async (category) => {
    try {
      const { error } = await supabase
        .from("categories")
        .update({
          show_on_homepage: !category.show_on_homepage,
          updated_at: new Date().toISOString(),
        })
        .eq("id", category.id);

      if (error) throw error;

      toast.success("Category visibility updated.");
      fetchCategories();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update visibility.");
    }
  };
  const archiveCategory = async (category) => {
    try {
      const { error } = await supabase
        .from("categories")
        .update({
          status: "Archived",
          updated_at: new Date().toISOString(),
        })
        .eq("id", category.id);

      if (error) throw error;

      toast.success("Category archived.");
      fetchCategories();
    } catch (error) {
      console.error(error);
      toast.error("Failed to archive category.");
    }
  };

  const restoreCategory = async (category) => {
    try {
      const { error } = await supabase
        .from("categories")
        .update({
          status: "Active",
          updated_at: new Date().toISOString(),
        })
        .eq("id", category.id);

      if (error) throw error;

      toast.success("Category restored.");
      fetchCategories();
    } catch (error) {
      console.error(error);
      toast.error("Failed to restore category.");
    }
  };

  const duplicateCategory = async (category) => {
    try {
      const duplicate = { ...category };

      delete duplicate.id;
      delete duplicate.created_at;
      delete duplicate.updated_at;

      const { error } = await supabase.from("categories").insert({
        ...duplicate,
        name: `${category.name} Copy`,
        slug: `${category.slug}-copy-${Date.now()}`,
        status: "Hidden",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast.success("Category duplicated.");
      fetchCategories();
    } catch (error) {
      console.error(error);
      toast.error("Failed to duplicate category.");
    }
  };

  const getExportDateRange = (type) => {
    const now = new Date();
    const start = new Date();

    switch (type) {
      case "today":
        start.setHours(0, 0, 0, 0);
        break;

      case "week":
        start.setDate(now.getDate() - 7);
        break;

      case "month":
        start.setMonth(now.getMonth() - 1);
        break;

      case "three_months":
        start.setMonth(now.getMonth() - 3);
        break;

      case "year":
        start.setFullYear(now.getFullYear() - 1);
        break;

      default:
        break;
    }

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
      ({ start, end } = getExportDateRange(dateRange));
    }

    return data.filter((item) => {
      if (!item.created_at) return false;

      const createdAt = new Date(item.created_at);

      return createdAt >= start && createdAt <= end;
    });
  };

  const exportCategories = (
    type = "filtered",
    dateRange = "all",
    customRange = null,
  ) => {
    let exportData = [];

    switch (type) {
      case "all":
        exportData = categories;
        break;

      case "featured":
        exportData = categories.filter((item) => item.featured);
        break;

      case "hidden":
        exportData = categories.filter((item) => !item.show_on_homepage);
        break;

      default:
        exportData = filteredCategories;
    }

    exportData = filterByDate(exportData, dateRange, customRange);

    if (!exportData.length) {
      toast.error("No categories available to export.");
      return;
    }

    const rows = exportData.map((item, index) => ({
      "Sr No": index + 1,
      Name: item.name,
      Slug: item.slug,
      Description: item.description || "",
      Status: item.status,
      Featured: item.featured ? "Yes" : "No",
      Visible: item.show_on_homepage ? "Yes" : "No",
      "Display Order": item.display_order || 0,
      Created: item.created_at
        ? new Date(item.created_at).toLocaleString("en-IN")
        : "",
    }));

    const headers = Object.keys(rows[0]);

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        headers
          .map((header) => `"${String(row[header]).replace(/"/g, '""')}"`)
          .join(","),
      ),
    ].join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `categories-${new Date().toISOString().split("T")[0]}.csv`;

    link.click();

    URL.revokeObjectURL(url);

    toast.success("Categories exported successfully.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">Dashboard / Categories</p>

          <h1 className="mt-2 text-4xl font-bold text-[#061735]">Categories</h1>

          <p className="mt-2 text-gray-500">
            Manage your product categories and their settings.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3 font-semibold"
              >
                <Download size={18} />
                Export
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuItem onClick={() => exportCategories("filtered")}>
                <FileDown className="mr-2 h-4 w-4" />
                Export Filtered
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => exportCategories("all")}>
                <FileDown className="mr-2 h-4 w-4" />
                Export All
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => exportCategories("filtered", "today")}
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                Today
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => exportCategories("filtered", "week")}
              >
                Last 7 Days
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => exportCategories("filtered", "month")}
              >
                Last 30 Days
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => exportCategories("filtered", "three_months")}
              >
                Last 3 Months
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => exportCategories("filtered", "year")}
              >
                Last 1 Year
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setExportOpen(true)}>
                Custom Date Range
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => exportCategories("featured")}>
                Export Featured
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => exportCategories("hidden")}>
                Export Hidden
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            type="button"
            onClick={() => setAddOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 font-semibold text-white"
          >
            <Plus size={18} />
            Add Category
          </button>
        </div>
      </div>

      <CategoryStats categories={categories} />

      <CategoryFilters
        search={search}
        setSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        status={status}
        setStatus={(value) => {
          setStatus(value);
          setPage(1);
        }}
        visibility={visibility}
        setVisibility={(value) => {
          setVisibility(value);
          setPage(1);
        }}
        featured={featured}
        setFeatured={(value) => {
          setFeatured(value);
          setPage(1);
        }}
        resetFilters={resetFilters}
      />

      <div className="rounded-xl border bg-white">
        <CategoriesTable
          categories={paginatedCategories}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onArchive={archiveCategory}
          onRestore={restoreCategory}
          onDuplicate={duplicateCategory}
          onToggleVisibility={toggleVisibility}
        />

        <CategoryPagination
          page={page}
          setPage={setPage}
          totalItems={filteredCategories.length}
          totalPages={totalPages}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </div>

      <AddCategoryDialog
        open={addOpen}
        setOpen={setAddOpen}
        categories={categories}
        refreshCategories={fetchCategories}
      />

      <EditCategoryDialog
        open={editOpen}
        setOpen={setEditOpen}
        category={selectedCategory}
        categories={categories}
        refreshCategories={fetchCategories}
      />

      <DeleteCategoryDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        category={selectedCategory}
        refreshCategories={fetchCategories}
      />

      <ExportCategoriesDialog
        open={exportOpen}
        setOpen={setExportOpen}
        onExport={exportCategories}
      />
    </div>
  );
}
