import '@/assets/scss/components/section_aside/AsideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AsideBar() {
    return (
        <>
            <div className='clear-fixed'></div>
            <section>
                <aside>
                    <button><FontAwesomeIcon icon={['fas','image']} /></button>
                    <button><FontAwesomeIcon icon={['fas', 'sliders']} rotation={90} /></button>
                    <button><FontAwesomeIcon icon={['fas', 'eye']} /></button>
                    <button><FontAwesomeIcon icon={['fas', 'wand-magic-sparkles']} /></button>
                    <button><FontAwesomeIcon icon={['fas', 'palette']} /></button>
                    <button><FontAwesomeIcon icon={['fas', 'panorama']} /></button>
                    <button><FontAwesomeIcon icon={['fas', 'icons']} /></button>
                    <button><FontAwesomeIcon icon={['fas', 'square-pen']} /></button>
                    <button><FontAwesomeIcon icon={['fas', 't']} /></button>
                    <button><FontAwesomeIcon icon={['fas', 'tarp']} /></button>

                    <div className='clear-fixed'></div>
                </aside>
            </section>
        </>
    );
}
