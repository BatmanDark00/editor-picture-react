import { useState } from "react";
import "@/components/tool_menu_lateral/edit/"

const listSizePhotos = [
  {
    id: 1,
    name: "Forma Libre",
  },
  {
    id: 2,
    name: "Foto 4x6",
  },
  {
    id: 3,
    name: "Cuadrado 1x1",
  },
  {
    id: 4,
    name: "Cine",
  },
];

function Trim() {
  const [name, setName] = useState<string>();

  const listButton = listSizePhotos;

  const handleChange = (e: React.ChangeEvent<HTMLButtonElement>): void => {
    setName(e.target.value);
  };

  return (
    <div className="trim-menu">
      <div className="trim-menu-header">
        <button>&lt;-</button>
        <h3 className="title">Recortar</h3>
      </div>

      <div className="trim-menu-option">
        <button className="trim-menu-new-option">{name}</button>
        <div className="menu-options-trim">
          {listButton.map((item) => (
            <button 
             value={item.name} 
             key={item.id} 
             onChange={handleChange}
             className="trim-option"
            >
              {item.name}
            </button>
          ))}
        </div>
      

      <div className="orientation-option">
        <p className="text">Orientación</p>
        <button>Retrato</button>
        <button>Paisaje</button>
      </div>
      <div className="size-option">
        <p className="text">anchura</p>
        <button>32px</button>

        <p className="text">Altura</p>
        <button>32px</button>
      </div>

      <div className="option-aplication">
        <button className="cancel">Cancelar</button>
        <button className="aplic">Aplicar</button>
      </div>
      </div>
    </div>
  );
}

export default Trim;
