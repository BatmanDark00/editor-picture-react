
import headerModule from "@/modules/common/components/home/header/header.module.scss";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <header className={headerModule.header}>
      <nav>
        <ul>
          <li><NavLink to="/picshur/"><span className={headerModule.text}>Home</span> <span className={headerModule.icon}><FontAwesomeIcon icon={["fas", "house"]} /></span></NavLink></li>
          <li><NavLink to="/picshur/features"><span className={headerModule.text}>Features</span> <span className={headerModule.icon}><FontAwesomeIcon icon={["fas", "sliders"]} /></span></NavLink></li>
          <li><NavLink to="/picshur/about"><span className={headerModule.text}>About us</span> <span className={headerModule.icon}><FontAwesomeIcon icon={["fas", "users-gear"]} /></span></NavLink></li>
          <li><NavLink to="/picshur/contact"><span className={headerModule.text}>Contact</span> <span className={headerModule.icon}><FontAwesomeIcon icon={["fas", "envelope"]} /></span></NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
