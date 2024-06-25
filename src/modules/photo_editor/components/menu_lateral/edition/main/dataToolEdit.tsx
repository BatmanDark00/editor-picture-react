// component form basic concept
//import Color from "@/modules/photo_editor/components/menu_lateral/edition/color/Color";
//import Trim from "@/modules/photo_editor/components/menu_lateral/edition/trim/Trim";
//import Rotate from "@/modules/photo_editor/components/menu_lateral/edition/rotate/Rotate";

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
          //component: <Trim />,
        },
        {
          name: "menuLateral.toolEditor.color",
          icon: ["fas", "palette"],

          //component: <Color />,
        },
        {
          name: "menuLateral.toolEditor.rotate",
          icon: ["fas", "rotate-right"],

          //component: <Rotate />,
        },
      ],
    },

    {
      id: "accordion2",
      name: "accordion2",
      title: "menuLateral.toolEditor.basicConcepts",
      open: true,
      actions: [
        {
          name: "common.cut",
          icon: ["fas", "crop"],
          get clearProperties() {
            return clearProperties;
          },
          //component: <Trim />,
        },
        {
          name: "menuLateral.toolEditor.color",
          icon: ["fas", "palette"],

          //component: <Color />,
        },
      ],
    },

    {
      id: "accordion3",
      name: "accordion3",
      title: "menuLateral.toolEditor.basicConcepts",
      open: true,
      actions: [
        {
          name: "common.cut",
          icon: ["fas", "crop"],
          get clearProperties() {
            return clearProperties;
          },
         // component: <Trim />,
        },
        {
          name: "menuLateral.toolEditor.color",
          icon: ["fas", "palette"],

          //component: <Color />,
        },
      ],
    },
  ],
};

export default dataToolEdit;
