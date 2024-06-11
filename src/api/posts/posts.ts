import { axiosClient, getToken } from "@/config/axios";
import { PostResponse, PostsList } from "@/utils/types/postsTypes";

export const createPostRequest = async (
  body: Record<string, string | number>
): Promise<PostResponse> => {
  getToken();
  const { data } = await axiosClient.post("/posts", body);
  return data;
};

export const showPostsRequest = async (page: number): Promise<PostsList> => {
  getToken();
  let url = `/posts`;
  if (page) url += `?page=${page}`;
  const { data } = await axiosClient.get(url);
  console.log(data);
  return data;
};

export const deletePostRequest = async (id: number): Promise<String> => {
  getToken();
  const { data } = await axiosClient.delete(`/posts/${id}`);
  return data;
};
