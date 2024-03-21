import { axiosClient, getToken } from "@/config/axios";

export const loginReq = async (body: any): Promise<any> => {
  const { data } = await axiosClient.post("/auth/login", body);
  return data;
};
