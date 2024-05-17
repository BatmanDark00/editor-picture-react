import modalBase from "@/assets/styles/components/common/modalBase.module.scss";
import { useEffect } from "react";

interface ModalBaseProps {
  title: string;
  children: React.ReactNode;
  isHeader?: boolean;
  size?: "full" | "large" | "medium" | "small";
  idModal?: string;
  isOpen?: boolean;
  closeModal?: () => void;
}

export default function ModalBase({
  title,
  children,
  isHeader = true,
  size = "medium",
  idModal = String(Math.random()),
  isOpen = false,
  closeModal,
}: ModalBaseProps) {
  useEffect(() => {
    const modal = document.getElementById(idModal);

    if (isOpen) {
      modal?.removeAttribute("style");
    } else {
      modal?.setAttribute("style", "display: none");
    }
  });

  const closeInstanceModal = () => {
    const modal = document.getElementById(idModal);

    if (modal && isOpen) {
      modal.style.display = "none";
      closeModal && closeModal();
    }
  };

  return (
    <div className={modalBase.modalBase} modal-size={size} id={idModal}>
      {isHeader && (
        <div className={modalBase.modalBase__header} modal-size={size}>
          {title}
          <p className={modalBase.modalBase__header__title}></p>
          <p
            className={modalBase.modalBase__header__close}
            onClick={closeInstanceModal}
          >
            {" "}
            X
          </p>
        </div>
      )}

      <div className={modalBase.modalBase__content} modal-size={size}>
        {children}
      </div>
    </div>
  );
}
