import buttonBase from "@/assets/styles/components/common/buttonBase.module.scss";

interface Props {
  className?: string;
  size?: "small" | "medium" | "large";
  margin?: "none" | "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  value?: string;
  textAlign?: "center" | "left" | "right";
}

function ButtonBase({
  className = "btn_theme",
  size = "small",
  margin = "small",
  children,
  onClick,
  onChange,
  textAlign = "left",
}: Props) {
  return (
    <>
      <button
        className={buttonBase[className]}
        data-size={size}
        data-margin={margin}       
        onClick={onClick}
        onChange={onChange}  
        style={{ textAlign: textAlign  }}     
      >
        {children}
      </button>
    </>
  );
}

export default ButtonBase;
