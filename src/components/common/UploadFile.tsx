import React from "react";

import upload from "@/assets/images/upload_re_pasx.svg";

import "@/assets/scss/components/common/uploadFile.scss";

interface Props {
  accept?: string;
  onFileUpload: (file: File) => void; // Callback para manejar la carga de archivos en el componente padre
}

const UploadFile = ({ accept = "image/*", onFileUpload }: Props) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    console.log("Soy el componente UploadFile: ", file);

    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="upload-file">
      <input
        type="file"
        id="file"
        className="input-file"
        accept={accept}
        onChange={handleFileChange}
      />
      <label htmlFor="file">
        <img src={upload} alt="upload" />        
      </label>
    </div>
  );
};

export default UploadFile;
