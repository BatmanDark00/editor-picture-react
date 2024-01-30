import '@/assets/scss/components/footer/NavFooter.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NavFooter() {

    return (
        <>
        <footer id='footer'>
            <div>
                <button><FontAwesomeIcon icon={["fas", "layer-group"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "clone"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "border-all"]} /></button>
            </div>

            <div>
                <button><FontAwesomeIcon icon={["fas", "expand"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "compress"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "minus"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "plus"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
            </div>
            
            <div>
                <button><FontAwesomeIcon icon={["fas", "rotate"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "arrow-turn-up"]} rotation={270}/></button>
                <button><FontAwesomeIcon icon={["fas", "arrow-turn-down"]} rotation={270} /></button> 
                <button><FontAwesomeIcon icon={["fas", "clock-rotate-left"]} /></button>
            </div>
        </footer>
        </>
    )
}