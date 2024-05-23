import React from "react";

//  Posibles Props a utilizar
interface InputProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value?: string;
}

function InputBase({ onChange, value, children }: InputProps) {
  return (
    <>
      <div className="form" >
        <input type="text" onChange={onChange} value={value} required />
        <label className="label">
          <span className="text-name">{children}</span>
        </label>
      </div>
    </>
  );
}

export default InputBase;
