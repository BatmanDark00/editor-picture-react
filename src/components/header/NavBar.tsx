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

            <button>Save <FontAwesomeIcon icon={['fas', 'chevron-down']} /></button>

            <button>Batch</button>
          </div>

          <div>
            <button><FontAwesomeIcon icon={['fas', 'info']} /></button>
            <button><FontAwesomeIcon icon={['fas', 'user']} /></button>
          </div>
          
        </nav>

      </header>
    </>
  );
}