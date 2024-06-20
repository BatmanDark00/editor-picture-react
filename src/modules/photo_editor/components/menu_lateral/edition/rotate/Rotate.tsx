//import React, { useState } from "react";
import rotate from "@/modules/photo_editor/components/menu_lateral/edition/rotate/rotate.module.scss"

//import { Cropper, CropperRef } from "react-advanced-cropper";
import { useDispatch, useSelector } from "react-redux";

import ButtonBase from "@/components/common/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reflect from "@/assets/images/horizontal_reflect_icon_216768.svg"
import verticalReflect from "@/assets/images/vertical_reflect_icon_216727.svg"
import { setRotate, setFlip, resetRotate } from "@/modules/photo_editor/states/cropper/transformSlice";
import { RootState } from "@/states";

function Rotate () {
    const dispatch = useDispatch();
    const transform = useSelector((state: RootState) => state.transform) 

     const flipHorizontal = () => {
        dispatch(setFlip({horizontal: !transform.flip?.horizontal}))
    }; 

     const flipVertical = () => {
        dispatch(setFlip({vertical: !transform.flip?.vertical}))
    }; 
     
    const handleRotatePositive = () => {
        const newValue = (transform.rotate + 90) % 360;
        dispatch(setRotate(newValue));
        dispatch(setRotate(90))
    };

    const handleRotateNegative = () => {
        const newValue = (transform.rotate - 90 + 360) % 360;
        dispatch(setRotate(newValue));
        dispatch(setRotate(-90))
    };

    const handleResetRotationClick = () => {
        dispatch(resetRotate())
        dispatch(setFlip({ horizontal: false, vertical: false }))
    }

    return (
        <section className={rotate.rotateContainer}>
            <div className={rotate.rotateMenu}>
                <div className={rotate.divRotateFunction}>
                    <p className={rotate.titleFunction}>Rotar</p>
                    <div className={rotate.divButtonsFunction}>
                    <ButtonBase 
                     onClick={handleRotatePositive} 
                     textAlign="center" 
                     size="small">
                        <FontAwesomeIcon icon={["fas", "rotate-left"]} />
                    </ButtonBase>
                    <ButtonBase 
                     onClick={handleRotateNegative} 
                     textAlign="center" 
                     size="small">
                        <FontAwesomeIcon icon={["fas", "rotate-right"]} />
                    </ButtonBase>
                    </div>
                </div>
                <div className={rotate.divRotateFunction}>
                    <p className={rotate.titleFunction}>Voltear</p>
                    <div className={rotate.divButtonsFunction}>
                    <ButtonBase
                    onClick={flipHorizontal} 
                     textAlign="center" 
                     size="small">
                        <img src={reflect} alt="horizontal reflect icon" /> 
                    </ButtonBase>
                    <ButtonBase 
                    onClick={flipVertical}
                     textAlign="center" 
                     size="small">
                        <img src={verticalReflect} alt="vertical reflect icon" /> 
                    </ButtonBase>
                    </div>
                </div>
            </div>
            <div className={rotate.divButtonsConfirm}>
                <ButtonBase onClick={handleResetRotationClick} textAlign="center">Cancelar</ButtonBase>
                <ButtonBase textAlign="center" className="btn_primary">Aplicar</ButtonBase>
            </div>
        </section>
    )
}

export default Rotate;