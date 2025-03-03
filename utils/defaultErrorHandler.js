import toast from "react-hot-toast";

const defaultErrorHandler = (
  error = null,
  defaultMessage = "Something went Wrong!"
) => {
  var errorMessage =
    typeof error == "string"
      ? error
      : typeof error?.message === "string"
      ? error?.message
      : typeof error?.error?.message === "string"
      ? error?.error?.message
      : defaultMessage;
  toast.error(errorMessage);
  return errorMessage;
};

export default defaultErrorHandler;
