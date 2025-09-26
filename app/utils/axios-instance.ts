import axios from "axios";

export const baseUrl =
  "https://deserving-passion-2c6c2f79bf.strapiapp.com/api/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleError = async (error: any) => {
  if (!error.response) {
    console.log("Network error or server is unreachable.");
    return Promise.reject(new Error("Network error or server is unreachable."));
  }

  const { status, data } = error.response;

  // Handle 401 errors with session expired dialog
  if (status === 401) {
    return Promise.reject(new Error("Session expired"));
  }

  const messages: Record<number, string> = {
    400: "Bad Request: Please check your input.",
    403: "Forbidden: You do not have access to this resource.",
    404: "Not Found: The resource was not found.",
    500: "Internal Server Error: Please try again later.",
  };

  const errorMessage =
    data?.message ||
    messages[status as keyof typeof messages] ||
    "An unexpected error occurred.";

  return Promise.reject(new Error(errorMessage));
};

axiosInstance.interceptors.response.use((res) => res, handleError);

export { axiosInstance };
