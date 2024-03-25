import { axiosClient, getToken } from "@/config/axios";

export const createPostRequest = async (
  body: Record<string, string>
): Promise<PostResponse> => {
  getToken();
  const { data } = await axiosClient.post("/posts", body);
  console.log(data);
  return data;
};
