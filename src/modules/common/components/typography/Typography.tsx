// src/components/Typography.tsx
import React, { CSSProperties } from "react";
import "@/modules/common/components/typography/typography.scss";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  weight?: "light" | "regular" | "bold";
  color?: string;
  children: React.ReactNode;
  margin?: string;
  align?: "left" | "center" | "right" | "justify";
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  weight = "regular",
  color = "var(--color-text)",
  children,
  margin = "0",
  align = "left",
}) => {
  const classNames = `typography ${variant} ${weight} ${align}`;

  const style: CSSProperties = {
    color: color,
    margin: margin,
  };

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

export default Typography;
