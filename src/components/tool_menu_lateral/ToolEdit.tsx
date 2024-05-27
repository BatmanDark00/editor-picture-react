import "@/assets/styles/components/tool_menu_lateral/toolEdit.scss";

import Accordion from "@/components/common/Accordion";
import ButtonBase from "@/components/common/ButtonBase";

export default function ToolEdit() {
  return (
    <>
      <div className="tool-edit">
        <h3>Editar </h3>   
   

      <Accordion id="accordion1" name="accordion1" title="Conceptos básicos" open={true} > 
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i> Recortar</ButtonBase>
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i> Recortar</ButtonBase>
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i> Recortar</ButtonBase>
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i> Recortar</ButtonBase>
      </Accordion>

      <Accordion id="accordion2" name="accordion2" title="Remove replace" open={true}>
      <ButtonBase> <i className="fa-solid fa-crop-simple"></i> Otra cosa</ButtonBase>
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i> Recortar</ButtonBase>
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i> Recortar</ButtonBase>
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i> Recortar</ButtonBase>
      </Accordion>      
      </div>
    </>
  );
}
