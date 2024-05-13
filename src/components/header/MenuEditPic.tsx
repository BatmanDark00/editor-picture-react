import React, { Component, useRef, useEffect  } from 'react'
import '@/assets/styles/components/header/MenuEditPic.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default class MenuEditPic extends Component {
    constructor(props) {
        super(props);
        this.menuRef = React.createRef();
      }
    
      componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
      }
    
      handleClickOutside = (event) => {
        if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
          this.props.onClose();
        }
      };
    
    
    render() {
        return (
            <div  ref={this.menuRef} className='divbar-menu-dropdown' >
                <div className='divbar-title'>
                    <h2>PhotoEditor</h2>
                    <hr />

                    <div className='divbar-section-app'>
                        <h3>App Section</h3>

                        <div className='divbar-son-app'>
                            <button><FontAwesomeIcon icon={['fas', 'gauge-high']} /> Panel de Control</button>
                            <button><FontAwesomeIcon icon={['fas', 'image']} />Editor de fotos</button>
                            <button><FontAwesomeIcon icon={['fas', 'table-cells-large']} />Collage</button>
                            <button><FontAwesomeIcon icon={['fas', 'pen-ruler']} />Diseñador Rápido</button>
                        </div>

                    </div>
                </div>

                <div className='divbar-function'>
                    <button><FontAwesomeIcon icon={['fas', 'magnifying-glass']} />Buscador de Funciones</button>
                    <button><FontAwesomeIcon icon={['fas', 'images']} />Fotos</button>
                    <button><FontAwesomeIcon icon={['fas', 'briefcase']} />Proyectos</button>
                    <button><FontAwesomeIcon icon={['fas', 'file-lines']} />Usar Guías</button>
                    <button><FontAwesomeIcon icon={['fas', 'bullhorn']} />Novedades</button>
                    <button><FontAwesomeIcon icon={['fas', 'file-code']} />Informacion sobre PhotoEditor</button>
                </div>

                <div className='divbar-login'>
                    <button>Iniciar Sesión</button>
                    <button>Mejorar</button>
                </div>
            </div>

        )
    }
}
