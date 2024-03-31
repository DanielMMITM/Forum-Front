import toast from "react-hot-toast";
import { HttpErrors } from "@/utils/enum/HttpErrors";
import { useLogout } from "@/utils/hooks/Auth/Logout/useLogout";
import { CustomError } from "@/utils/types/errorTypes";

export const handleErrorsResponse = (error: CustomError) => {
  const { logout } = useLogout();
  toast.dismiss();

  switch (error.code) {
    case HttpErrors.UNAUTHORIZED: {
      toast.error(error.message, {
        className: "toast",
      });
      logout();
      break;
    }
    default: {
      toast.error(error.message ? error.message : error.debugMessage);
      break;
    }
  }
};
