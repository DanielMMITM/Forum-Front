import { axiosClient } from "@/config/axios";
import { User } from "@/utils/types/userTypes";

export const getCurrentUserRequest = async (id: number): Promise<User> => {
  const { data } = await axiosClient.get(`/users/${id}`);
  return data;
};
