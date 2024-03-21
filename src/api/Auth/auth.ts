import { axiosClient } from "@/config/axios";

export const loginReq = async (
  body: Record<string, string>
): Promise<LoginResponse> => {
  const { data } = await axiosClient.post("/auth/login", body);
  return data;
};
