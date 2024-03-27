import { axiosClient, getToken } from "@/config/axios";

export const getCoursesRequest = async (): Promise<any> => {
  getToken();
  const { data } = await axiosClient.get("/courses");
  return data;
};
