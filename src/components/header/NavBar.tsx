import "@/assets/scss/components/header/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const user = {
    name: "Lener",
    age: 20,
  };

  const handleOpenMenuEdit = () => {
    const customEvent = new CustomEvent("openMenuEdit", { detail: user });
    window.dispatchEvent(customEvent);
  };

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div>
            <button onClick={handleOpenMenuEdit}>
              <FontAwesomeIcon icon={["fas", "bars"]} /> Photo Editor
            </button>
          </div>
  
          <div className="dropdown-father-open">
            <ul className="dropdown" id="menu">
              <li className="dropdown-list">
                <a href="#" className="dropdown-link">
                  <span>
                    Open <FontAwesomeIcon icon={["fas", "chevron-down"]} className="dropdown-rown"/>
                  </span>
                  <input type="checkbox" className="dropdown-cheked" />
                </a>

                <div className="dropdown-content">
                  <h4 className="sub-title">Nueva imagen</h4>
                  <ul className="dropdown-sub">
                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Ordenador</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">PhotoEditor</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Google Drive</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Google Fotos</a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown-content">
                  <h4 className="sub-title">Proyeccto existente</h4>
                  <ul className="dropdown-sub">
                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Ordenador</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">PhotoEditor</a>
                    </li>
                  </ul>
                </div>
              </li>
              </ul>
            </div>

{/*
             <div className="dropdown-father-save">
            <ul className="dropdown" id="menu">
              <li className="dropdown-list">
                <a href="#" className="dropdown-link">
                  <span>
                    Save <FontAwesomeIcon icon={["fas", "chevron-down"]} className="dropdown-arrow"/>
                  </span>
                  <input type="checkbox" className="dropdown-cheked" />
                </a>
                <div className="dropdown-content">
                  <h4 className="sub-title">Guardar como imagen</h4>
                  <ul className="dropdown-sub">
                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Ordenador</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">PhotoEditor</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Google Drive</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Google Fotos</a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown-content">
                  <h4 className="sub-title">Más</h4>
                  <ul className="dropdown-sub">
                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Ordenador</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">PhotoEditor</a>
                    </li>
                  </ul>
                </div>
              </li>
              </ul>
            </div>
  */}

          <div>
            <button> Batch</button>
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={["fas", "circle-info"]} />
            </button>
            <button>
              <FontAwesomeIcon icon={["fas", "circle-user"]} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
