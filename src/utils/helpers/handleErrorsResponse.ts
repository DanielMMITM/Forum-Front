import toast from "react-hot-toast";
import { useLogout } from "@/utils/hooks/Auth/Logout/useLogout";

export function handleErrorsResponse(error: any) {
  const { logout } = useLogout();
  toast.dismiss();

  console.log(error.response.data);

  switch (error.response.data.code) {
    case HttpErrors.UNAUTHORIZED: {
      toast.error(error.response.data.message);
      logout;
      break;
    }
    default: {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : error.response.data.debugMessage
      );
      break;
    }
  }
}
