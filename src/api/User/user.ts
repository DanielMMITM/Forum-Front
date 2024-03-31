import { axiosClient } from "@/config/axios";
import { useUserStore } from "@/store/userStore";
import { User } from "@/utils/types/userTypes";

export const getCurrentUserRequest = async (): Promise<User> => {
  const { id } = useUserStore();
  const { data } = await axiosClient.get(`/users/${id}`);
  return data;
};
