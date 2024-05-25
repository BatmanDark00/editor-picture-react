import React from "react";
import "@/assets/styles/components/common/inputBase.scss";

//  Posibles Props a utilizar
interface InputProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value?: string;
}

function InputBase({ onChange, onKeyDown, value, children }: InputProps) {
  return (
    <>
      <div className="form" >
        <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={value}  />
        <label className="label">
          <span className="text-name">{children}</span>
        </label>
      </div>
    </>
  );
}

export default InputBase;
