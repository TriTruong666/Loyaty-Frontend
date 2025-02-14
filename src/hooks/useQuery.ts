import { Product } from "@/interfaces/Product";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import * as ProductService from "@/service/product/productService";
function useFetch<T>(
  queryKey: any[],
  queryFn: () => Promise<T>,
  options?: UseQueryOptions<T>
) {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery<T>({
    queryKey,
    queryFn,
    ...options,
  });

  return { data, isLoading, isError, error, refetch, isFetching };
}

export function useAllProduct() {
  return useFetch<Product[]>(["products"], async () =>
    ProductService.getAllProductService()
  );
}

export function useGetProductByLimit() {
  return useFetch<Product[]>(["products"], async () =>
    ProductService.getProductServiceByLimit()
  );
}
