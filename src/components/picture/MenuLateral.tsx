import { useDispatch } from "react-redux";

import "@/assets/styles/components/picture/menuLateral.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { menuLateralData } from "@/json/picture/menuLateralData";

import { setComponent } from "@/redux/menuLateralEditSlice";
import { useState } from "react";

export default function MenuLateral() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dispatch = useDispatch();

  const handleComponent = (component: string, index: number) => {
    dispatch(setComponent(component));
    setActiveIndex(index)
  };

  return (
    <div className="menu-lateral">
      <div className="section-actions">
        <aside> 
          <ul className="item-menu">
          {menuLateralData.map((menu, index) => (
              <li 
              className={index === activeIndex ? "item-menu-li active" : "item-menu-li"}
               key={index}
               onClick={() => handleComponent(menu.component, index)}
              >
                <FontAwesomeIcon icon={menu.icon as IconProp} className="icon"/>
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
