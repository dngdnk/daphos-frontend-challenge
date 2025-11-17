import Swal from "sweetalert2";
import "../styles/CustomPopUps.scss";

export const PopUp = async ({
  title,
  text = "",
  icon = "question",
  confirmText = "OK",
  cancelText = "Cancel",
  denyText = null,
  type = "default",
}) => {
  const options = {
    title,
    text,
    icon,
    showCancelButton: !!cancelText,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    customClass: {
      popup: `swal2-popup swal2-popup-${type}`,
      title: `swal2-title swal2-title-${type}`,
      content: `swal2-content swal2-content-${type}`,
      confirmButton: `swal2-confirm swal2-confirm-${type}`,
      cancelButton: `swal2-cancel swal2-cancel-${type}`,
      denyButton: `swal2-deny swal2-deny-${type}`,
    },
  };

  if (denyText) {
    options.showDenyButton = true;
    options.denyButtonText = denyText;
  }

  return Swal.fire(options);
};
