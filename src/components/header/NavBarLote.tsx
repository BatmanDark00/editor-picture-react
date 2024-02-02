import { useRef } from "react";
import navBarLoteModule from "@/components/header/NavBarLote.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { p } from "node_modules/million/dist/shared/million.485bbee4";
import upload from "@/assets/images/undraw_photos_re_pvh3.svg";

export default function NavBarLote() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    // Simula el clic en el input de archivo cuando se hace clic en la imagen
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  const menu = [
    {
      id: 1,
      name: "Cambiar tamaño",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 2,
      name: "Rotar",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 3,
      name: "Exposición",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 4,
      name: "Color",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 5,
      name: "Mejorar Automático",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 6,
      name: "Mejorar Nitidez",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 7,
      name: "B&W Tones 3",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 8,
      name: "Orton Style 1",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 9,
      name: "Chromatic 2",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 10,
      name: "Warmer Tones 9",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 11,
      name: "Color Grading",
      origin: "fas",
      icon: "xmark",
    },
    {
      id: 12,
      name: "Segmented",
      origin: "fas",
      icon: "xmark",
    },
  ];
  return (
    <>
      <div id="section" className={navBarLoteModule.section}>
        <div id="header" className={navBarLoteModule.header}>
          <h2 className={navBarLoteModule.title_lote}>Procesado por Lote</h2>
          <div className={navBarLoteModule.div_buttons}>
            <div id="inf-button" className="">
              <button>
                <FontAwesomeIcon
                  icon={["fas", "circle-info"]}
                  className={navBarLoteModule.button_style}
                />
              </button>
            </div>

            <div id="close">
              <button className="close">
                <FontAwesomeIcon
                  icon={["fas", "xmark"]}
                  className={navBarLoteModule.button_style}
                />
              </button>
            </div>
          </div>
        </div>

        <div className={navBarLoteModule.container}>
          <div id="div-fixed" className={navBarLoteModule.div_fixed}>
            <div className={navBarLoteModule.div_head_title}>
              <ul>
                <li className={navBarLoteModule.style_li}>
                  <a href="#">Administrar Herramientas</a>
                  <FontAwesomeIcon
                    icon={["fas", "chevron-right"]}
                    className={navBarLoteModule.right}
                  />
                </li>
              </ul>
            </div>

            <div className={navBarLoteModule.div_list}>
              <ul>
                {menu.map((m) => (
                  <li>
                    <a href="#">{m.name}</a>
                    <span>
                      <FontAwesomeIcon
                        icon={[m.origin, m.icon]}
                        className={navBarLoteModule.xmark}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={navBarLoteModule.flex_navbar}>
            <nav id="nav" className={navBarLoteModule.nav}>
              <button>Añadir imagnes</button>
              <button>Guardar</button>
            </nav>

            <div className={navBarLoteModule.soy_un_div}>
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: "none" }}
              />
              <img src={upload} onClick={handleClick} alt="Upload Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
