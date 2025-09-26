import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, baseUrl } from "../utils/axios-instance";

// Create Data
export const usePostData = (url: string) => {
  const mutation = useMutation({
    mutationFn: async (arg: any) => {
      const response = await axiosInstance.post(baseUrl + url, arg);
      return response.data;
    },
  });

  return mutation;
};

// Fetch Data (GET with Query)
export const useFetchData = (url: string | null) => {
  const query = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await axiosInstance.get(baseUrl + url);
      return response.data;
    },
    enabled: !!url, // only run query if url is truthy
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
  });

  return query;
};
