// component form basic concept
import Trim from "@/components/tool_menu_lateral/tool_edit/basic_concepts/Trim";
import Color from "@/components/tool_menu_lateral/tool_edit/basic_concepts/Color";

const dataToolEdit = {
  title: "Editar",
  accordions: [
    {
      id: "accordion1",
      name: "accordion1",
      title: "Conceptos básicos",
      open: true,
      actions: [
        {                 
          name: "Recortar",
          component: <Trim />,
        },
        {                  
          name: "Color",
          component: <Color />,
        },
      ],
    },
  ],
};

export default dataToolEdit;
