import { getCurrentUserRequest } from "@/api/User/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const { data: currentUser, isLoading } = useQuery({
    queryFn: () => getCurrentUserRequest(),
    queryKey: ["user"],
  });

  return { currentUser, isLoading };
};
