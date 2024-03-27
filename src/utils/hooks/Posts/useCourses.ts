import { getCoursesRequest } from "@/api/Courses/courses";
import { useQuery } from "@tanstack/react-query";

export const useCourses = () => {
  const { data: courses, isLoading: isLoadingCourses } = useQuery({
    queryFn: () => getCoursesRequest(),
    queryKey: ["courses"],
  });
  return { courses, isLoadingCourses };
};
