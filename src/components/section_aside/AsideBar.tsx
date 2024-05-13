import "@/assets/styles/components/section_aside/AsideBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function AsideBar() {
  return (
    <>
      <div className="clear-fixed"></div>
      <section>
        <aside>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "image"]} />
            </button>
            <p>Admr. de imagénes</p>
          </div>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "sliders"]} rotation={90} />
            </button>
            <p>Editar</p>
          </div>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "eye"]} />
            </button>
            <p>Retoques</p>
          </div>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "wand-magic-sparkles"]} />
            </button>
            <p>Efectos</p>
          </div>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "palette"]} />
            </button>
            <p>Artístico</p>
          </div>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "panorama"]} />
            </button>
            <p>Marcos</p>
          </div>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "icons"]} />
            </button>
            <p>Gráficos</p>
          </div>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "square-pen"]} />
            </button>
            <p>Superposiciones</p>
          </div>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "t"]} />
            </button>
            <p>Texto</p>
          </div>
          <div className="item-menu">
            <button>
              <FontAwesomeIcon icon={["fas", "tarp"]} />
            </button>
            <p>Texturas</p>
          </div>
          <div className="clear-fixed"></div>
        </aside>
      </section>
    </>
  );
}
