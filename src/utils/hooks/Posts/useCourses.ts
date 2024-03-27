import { getCoursesRequest } from "@/api/courses/courses";
import { useQuery } from "@tanstack/react-query";

export const useCourses = () => {
  const { data: courses, isLoading: isLoadingCourses } = useQuery({
    queryFn: () => getCoursesRequest(),
    queryKey: ["courses"],
  });
  return { courses, isLoadingCourses };
};
