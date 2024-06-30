import React from "react";
import stylesBox from "@/assets/styles/components/common/pictureBox.module.scss"

interface props {
    src?: string;
    children?: React.ReactNode;
    title?: string;
    description?: string;
    alt?: string;
}

function PictureBox ({ src, title, description, alt }: props) {
    return (
        <>
        <div className={stylesBox.pictureBox}>
              <img className={stylesBox.img} src={src} alt={alt} />
              <div className={stylesBox.divDescription}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
        </>
    )
}

export default PictureBox;