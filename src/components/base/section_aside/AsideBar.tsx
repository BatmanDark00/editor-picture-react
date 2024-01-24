import '@assets/scss/components/section_aside/AsideBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function AsideBar() {
    return (
        <>
            <div className='clear-fixed'></div>
            <section>
                <aside>
                    <div>
                        <button><FontAwesomeIcon icon="fa-regular fa-image" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-sliders" rotation={90}/></button>
                        <button><FontAwesomeIcon icon="fa-regular fa-eye" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-wand-magic-sparkles" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-palette" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-panorama" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-icons" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-square-pen" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-font" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-layer-group" /></button>
                       
                        <div className='clear-fixed'>

                        </div>
                    </div>
                </aside>
            </section>
            <div className='clear-fixed'></div>
        </>
    )

}