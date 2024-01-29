import '@/assets/scss/components/footer/NavFooter.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NavFooter() {

    return (
        <>
        <footer id='footer'>
            <div>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
            </div>

            <div>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
            </div>
            
            <div>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
                <button><FontAwesomeIcon icon={["fas", "bars"]} /></button>
            </div>
        </footer>
        </>
    )
}