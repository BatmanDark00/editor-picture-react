import { useState } from "react";


const useImageForCropper = () => {
    const [urlImage, setUrlImage] = useState<string | null>(null);
    
    const sendImageCropper = (url: string) => {
        console.log(url);
        setUrlImage(url);
    };
    
    return { urlImage, sendImageCropper };

};


export default useImageForCropper;
