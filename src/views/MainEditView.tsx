import { useRef } from 'react'

import '@/assets/scss/views/MainEditView.scss'
import upload from '@/assets/images/upload.svg'

export default function MainEditView() {

    const inputRef = useRef(null);

    function handleClick(){
        console.log("hola putito");
       
    }

    return (
        <>
            <div className="main-edit-view">
                <input type="file" accept="image/*" ref={inputRef}></input>
                <img src={upload} onClick={handleClick}/>
            </div>
        </>

    )

}
