import '../../../../src/assets/scss/components/header/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function NavBar() {
  return (
    <>
      <header>
        <nav className='nav-bar'>
          <div>
            <button><FontAwesomeIcon icon="fa-solid fa-bars" /> Photo Editor</button>
          </div>

          <div>
            <button>Open <FontAwesomeIcon icon="fa-solid fa-chevron-down"/></button>

            <button>Save <FontAwesomeIcon icon="fa-solid fa-chevron-down" /></button>

            <button>Batch</button>
          </div>

          <div>
            <button><FontAwesomeIcon icon="fa-solid fa-info" /></button>
            <button><FontAwesomeIcon icon="fa-regular fa-user" /></button>
          </div>
        </nav>

      </header>
    </>
  );
}