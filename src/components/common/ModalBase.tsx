import modalBase from "@/assets/styles/components/common/modalBase.module.scss";
import { useEffect, useRef } from "react";

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
  size = "large",
  idModal = String(Math.random()),
  isOpen = false,
  closeModal,
}: ModalBaseProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = document.getElementById(idModal);

    if (isOpen) {
      modal?.removeAttribute("style");
    } else {
      modal?.setAttribute("style", "display: none");
    }

 /*    const handeOutsideClick = (event: MouseEvent) => {
    
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeInstanceModal();
      }
    }; 

     document.addEventListener("click", handeOutsideClick);  */
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
      <div
        className={modalBase.modalBase__content}
        modal-size={size}
        ref={modalRef}
        id="modalRef"
      >
        {isHeader && (
          <div
            className={modalBase.modalBase__content__header}
            modal-size={size}
          >
            {title}
            <p className={modalBase.modalBase__content__header__title}></p>
            <p
              className={modalBase.modalBase__content__header__close}
              onClick={closeInstanceModal}
            >
              {" "}
              X
            </p>
          </div>
        )}
        <div className={modalBase.modalBase__content__body}>{children}</div>
      </div>
    </div>
  );
}
