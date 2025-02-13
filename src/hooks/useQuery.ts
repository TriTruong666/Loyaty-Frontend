import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export default function useFetch<T>(
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
