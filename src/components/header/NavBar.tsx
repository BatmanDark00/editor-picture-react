import '@/assets/scss/components/header/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function NavBar() {
  return (
    <>
      <header>
        <nav className='nav-bar'>
          <div>
            <button><FontAwesomeIcon icon={['fas', 'bars']} /> Photo Editor</button>
          </div>
          
          <div>
            <button>Open <FontAwesomeIcon icon={['fas', 'chevron-down']} /></button>
            <div>
              <h4>Nueva imagen</h4>
              <button>Ordenador</button>
              <button>PhotoEditor</button>
              <button>Google Drive</button>
              <button>Google Fotos</button>
            </div>
            <h4>Proyeccto existente</h4>
            <div>
              <button>Ordenador</button>
              <button>PhotoEditor</button>
            </div>
          </div>

          <div>
            <button>Save <FontAwesomeIcon icon={['fas', 'chevron-down']} /></button>
            <div>

            </div>
          </div>

          <div>
            <button>Batch</button>
          </div>

          <div>
            <button><FontAwesomeIcon icon={['fas', 'circle-info']} /></button>
            <button><FontAwesomeIcon icon={['fas', 'circle-user']} /></button>
          </div>

        </nav>

      </header>
    </>
  );
}