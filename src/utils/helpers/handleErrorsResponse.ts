import toast from "react-hot-toast";
import { HttpErrors } from "@/utils/enum/HttpErrors";
import { useLogout } from "../hooks/Auth/Logout/useLogout";

export const handleErrorsResponse = (error: any) => {
  const { logout } = useLogout();
  toast.dismiss();

  switch (error.response?.data?.code) {
    case HttpErrors.UNAUTHORIZED: {
      toast.error(error.response?.data?.message, {
        className: "toast",
      });
      logout();
      break;
    }
    default: {
      toast.error(
        error.response?.data?.message
          ? error.response?.data?.message
          : error.response?.data?.debugMessage
      );
      break;
    }
  }
};
