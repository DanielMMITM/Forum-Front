import toast from "react-hot-toast";
import { HttpErrors } from "@/utils/enum/HttpErrors";
import { useLogout } from "@/utils/hooks/Auth/Logout/useLogout";
import { CustomError } from "@/utils/types/errorTypes";

export const handleErrorsResponse = (error: CustomError) => {
  toast.dismiss();

  switch (error.code) {
    case HttpErrors.BAD_REQUEST: {
      toast.error(error.debugMessage, {
        className: "toast",
      });
      break;
    }
    case HttpErrors.UNAUTHORIZED: {
      toast.error(error.message, {
        className: "toast",
      });
      useLogout();
      break;
    }
    case HttpErrors.NOT_FOUND: {
      toast.error(error.debugMessage, {
        className: "toast",
      });
      break;
    }
    case HttpErrors.SERVER_ERROR: {
      toast.error(error.message, {
        className: "toast",
      });
      break;
    }
    default: {
      toast.error(error.message ? error.message : error.debugMessage);
      break;
    }
  }
};
