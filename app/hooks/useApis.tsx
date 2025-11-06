import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, baseUrl } from "../utils/axios-instance";

const contactUsApiUrl =
  process.env.NEXT_PUBLIC_CONTACT_US_API_URL ||
  "https://latila.sbscuk.co.uk/public/api/contact-us";

// Create Data
export const usePostData = (url: string, isContactUrl: boolean = false) => {
  const mutation = useMutation({
    mutationFn: async (arg: Record<string, unknown>) => {
      const response = await axiosInstance.post(
        isContactUrl ? contactUsApiUrl : baseUrl + url,
        arg
      );
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
