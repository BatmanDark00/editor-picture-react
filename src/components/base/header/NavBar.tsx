import '../../../../src/assets/scss/components/header/Navbar.scss'

export default function NavBar() {
  return (
    <>
      <header>
        <nav className='nav-bar'>
          <div>
            <button><i className="fa-solid fa-bars"></i> Photo Editor</button>
          </div>

          <div>
            <button>Open <i className="fa-solid fa-chevron-down"></i></button>

            <button>Save <i className="fa-solid fa-chevron-down"></i></button>

            <button>Batch</button>
          </div>

          <div>
            <button><i className="fa-solid fa-info"></i></button>
            <button><i className="fa-regular fa-user"></i></button>
          </div>
        </nav>

      </header>
    </>
  );
}