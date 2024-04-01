import { getCurrentUserRequest } from "@/api/User/user";
import { useUserStore } from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const { id } = useUserStore();

  const { data: currentUser, isLoading } = useQuery({
    queryFn: () => (id !== null ? getCurrentUserRequest(id) : null),
    queryKey: ["user"],
  });

  return { currentUser, isLoading };
};
