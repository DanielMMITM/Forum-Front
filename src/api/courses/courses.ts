import { axiosClient, getToken } from "@/config/axios";
import { Course } from "@/utils/types/courseTypes";

export const getCoursesRequest = async (): Promise<Course[]> => {
  getToken();
  const { data } = await axiosClient.get("/courses");
  return data;
};
