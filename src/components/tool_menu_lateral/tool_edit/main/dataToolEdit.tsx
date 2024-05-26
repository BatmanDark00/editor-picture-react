// component form basic concept
import Color from "@/components/tool_menu_lateral/tool_edit/basic_concepts/Color";
import Trim from "@/components/tool_menu_lateral/tool_edit/basic_concepts/Trim";

const dataToolEdit = {
  title: "menuLateral.toolEditor.title",
  accordions: [
    {
      id: "accordion1",
      name: "accordion1",
      title: "menuLateral.toolEditor.basicConcepts", //esto lo encuentras en el archivo de idioma
      open: true,
      actions: [
        {
          name: "common.cut",
          component: <Trim />,
        },
        {
          name: "menuLateral.toolEditor.color",
          component: <Color />,
        },
      ],
    },
  ],
};

export default dataToolEdit;
