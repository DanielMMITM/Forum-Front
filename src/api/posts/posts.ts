import { axiosClient, getToken } from "@/config/axios";

export const createPostRequest = async (
  body: Record<string, string | number>
): Promise<PostResponse> => {
  getToken();
  const { data } = await axiosClient.post("/posts", body);
  return data;
};

export const showPostsRequest = async (): Promise<any> => {
  getToken();
  const { data } = await axiosClient.get("/posts");
  return data;
};
