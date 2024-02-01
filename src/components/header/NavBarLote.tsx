import navBarLoteModule from "@/components/header/NavBarLote.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBarLote() {
  return (
    <>
      <div id="section" className={navBarLoteModule.section}>
        <div id="header" className={navBarLoteModule.header}>
          <h2 className={navBarLoteModule.title_lote}>Procesado por Lote</h2>
          <div className={navBarLoteModule.div_buttons}>
            <div id="inf-button">
              <button>
                <FontAwesomeIcon icon={["fas", "circle-info"]} />
              </button>
            </div>

            <div id="close">
              <button className="close">
                <FontAwesomeIcon icon={["fas", "xmark"]} />
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div id="div-fixed">Soy batman</div>

          <nav id="nav">
            <button>Añadir imagnes</button>
            <button>Guardar</button>
          </nav>

        </div> 
      </div>
    </>
  );
}
