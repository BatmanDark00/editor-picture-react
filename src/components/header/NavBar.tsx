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
          <div className="items-center">
            <div className="dropdown-father-open">
              <button className="dropbtn">
                Open <FontAwesomeIcon icon={["fas", "chevron-down"]} />
              </button>
              <div className="dropdown-son-open" id="myDropdown">
                <h4>Nueva imagen</h4>
                <button>Ordenador</button>
                <button>PhotoEditor</button>
                <button>Google Drive</button>
                <button>Google Fotos</button>
              </div>
              <div className="dropdown-son-open" id="myDropdown">
                <h4>Proyeccto existente</h4>
                <button>Ordenador</button>
                <button>PhotoEditor</button>
              </div>
            </div>

            <div className="dropdown-father-save">
              <button>
                Save <FontAwesomeIcon icon={["fas", "chevron-down"]} />
              </button>
              <div className="dropdown-son-save">
                <h4>Guardar como imagen</h4>
                <button>Ordenador</button>
                <button>PhotoEditor</button>
                <button>Google Drive</button>
                <button>Google Fotos</button>
              </div>

              <div className="dropdown-son-save">
                <h4>Proyeccto existente</h4>
                <button>Ordenador</button>
                <button>PhotoEditor</button>
              </div>
            </div>

            <div>
              <button>Batch</button>
            </div>
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
