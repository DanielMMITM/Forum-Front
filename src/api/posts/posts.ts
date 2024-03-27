import { axiosClient, getToken } from "@/config/axios";

export const createPostRequest = async (
  body: Record<string, string | number>
): Promise<PostResponse> => {
  getToken();
  const { data } = await axiosClient.post("/posts", body);
  return data;
};

export const showPostsRequest = async (page: number): Promise<any> => {
  getToken();
  let url = `/posts`;
  if (page) url += `?page=${page}`;
  const { data } = await axiosClient.get(url);
  return data;
};
