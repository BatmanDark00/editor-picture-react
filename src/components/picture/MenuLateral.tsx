import { useDispatch } from "react-redux";

import "@/assets/styles/components/picture/menuLateral.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { menuLateralData } from "@/json/picture/menuLateralData";

import { setComponent } from "@/redux/menuLateralEditSlice";

export default function MenuLateral() {
  const dispatch = useDispatch();

  const handleComponent = (component: string) => {
    dispatch(setComponent(component));
  };

  return (
    <div className="menu-lateral">
      <div className="section-actions">
        <aside> 
          <ul className="item-menu">
          {menuLateralData.map((menu, index) => (
              <li 
               className="item-menu-li"
               key={index}
              onClick={() => handleComponent(menu.component)}
              >
                <FontAwesomeIcon icon={menu.icon as IconProp} />
                <a href="#" className="anchor">
                  {menu.text}
                </a>
              </li>
           ))} 
           </ul>
          
          <div className="clear-fixed"></div>
        </aside>
      </div>
    </div>
  );
}
