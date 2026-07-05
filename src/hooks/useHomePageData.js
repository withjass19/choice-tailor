import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getHomepageCategories } from "@/services/categoryService";
import { getActiveProducts } from "@/services/productService";

export function useHomePageData() {
  const [popularProducts, setPopularProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setLoadingCategories(true);
        setLoadingProducts(true);

        const [productsResult, categoriesResult] = await Promise.all([
          getActiveProducts({ limit: 12 }),
          getHomepageCategories({ limit: 8 }),
        ]);

        if (!isMounted) {
          return;
        }

        if (productsResult.error) {
          throw productsResult.error;
        }

        if (categoriesResult.error) {
          throw categoriesResult.error;
        }

        setPopularProducts(productsResult.data);
        setCategories(categoriesResult.data);
      } catch (error) {
        console.error("Home page data fetch failed:", error);
        toast.error("Failed to load content.");
      } finally {
        if (isMounted) {
          setLoadingCategories(false);
          setLoadingProducts(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    popularProducts,
    categories,
    loadingCategories,
    loadingProducts,
  };
}
