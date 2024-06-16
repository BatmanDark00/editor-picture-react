import React from "react";
import rotate from "@/assets/styles/components/tool_menu_lateral/edit/basic_concepts/rotate.module.scss"
import ButtonBase from "@/components/common/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reflect from "@/assets/images/horizontal_reflect_icon_216768.svg"
import verticalReflect from "@/assets/images/vertical_reflect_icon_216727.svg"

function Rotate () {
    return (
        <section className={rotate.rotateContainer}>
            <div className={rotate.rotateMenu}>
                <div className={rotate.divRotateFunction}>
                    <p className={rotate.titleFunction}>Rotar</p>
                    <div className={rotate.divButtonsFunction}>
                    <ButtonBase textAlign="center" size="small"><FontAwesomeIcon icon={["fas", "rotate-left"]} /></ButtonBase>
                    <ButtonBase textAlign="center" size="small"><FontAwesomeIcon icon={["fas", "rotate-right"]} /></ButtonBase>
                    </div>
                </div>
                <div className={rotate.divRotateFunction}>
                    <p className={rotate.titleFunction}>Voltear</p>
                    <div className={rotate.divButtonsFunction}>
                    <ButtonBase textAlign="center" size="small"><img src={reflect} /> </ButtonBase>
                    <ButtonBase textAlign="center" size="small"><img src={verticalReflect} /> </ButtonBase>
                    </div>
                </div>
            </div>
            <div className={rotate.divButtonsConfirm}>
                <ButtonBase textAlign="center">Cancelar</ButtonBase>
                <ButtonBase textAlign="center" className="btn_primary">Aplicar</ButtonBase>
            </div>
        </section>
    )
}

export default Rotate;