// component form basic concept
import Color from "@/components/tool_menu_lateral/tool_edit/basic_concepts/Color";
import Trim from "@/components/tool_menu_lateral/tool_edit/basic_concepts/Trim";

const clearProperties = () => {
  console.log("clearProperties");
};

const dataToolEdit = {
  title: "menuLateral.toolEditor.title",
  accordions: [
    {
      id: "accordion1",
      name: "accordion1",
      title: "menuLateral.toolEditor.basicConcepts",
      open: true,
      actions: [
        {
          name: "common.cut",
          icon: ["fas", "crop"],
          get clearProperties() {
            return clearProperties;
          },
          component: <Trim />,
        },
        {
          name: "menuLateral.toolEditor.color",
          icon: ["fas", "palette"],

          component: <Color />,
        },
      ],
    },
  ],
};

export default dataToolEdit;
