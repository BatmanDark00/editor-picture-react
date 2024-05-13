import '@/assets/styles/components/picture/menuFooter.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function MenuFooter() {

    return (
        <>
        <footer id='menu-footer'>
            <div>
                <button disabled><FontAwesomeIcon icon={["fas", "layer-group"]} /></button>
                <button disabled><FontAwesomeIcon icon={["fas", "clone"]} /></button>
                <button disabled><FontAwesomeIcon icon={["fas", "border-all"]} /></button>
            </div>

            <div>
                <button disabled><FontAwesomeIcon icon={["fas", "expand"]} /></button>
                <button disabled> <FontAwesomeIcon icon={["fas", "compress"]} /></button>
                <button disabled><FontAwesomeIcon icon={["fas", "minus"]} /></button>
                <input className="inp-range" type="range" min="1" max="10" step="0.1" value="2" />
                <button disabled> <FontAwesomeIcon icon={["fas", "plus"]} /></button>
                <button disabled><FontAwesomeIcon icon={["fas", "bars"]} /></button>
            </div>
            
            <div>
                <button disabled><FontAwesomeIcon icon={["fas", "rotate"]} /></button>
                <button disabled><FontAwesomeIcon icon={["fas", "arrow-turn-up"]} rotation={270}/></button>
                <button disabled><FontAwesomeIcon icon={["fas", "arrow-turn-down"]} rotation={270} /></button> 
                <button disabled><FontAwesomeIcon icon={["fas", "clock-rotate-left"]} /></button>
            </div>
        </footer>
        </>
    )
}