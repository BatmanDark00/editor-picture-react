import { useDispatch } from "react-redux";

import "@/modules/photo_editor/components/main/lateral/menuLateral.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { menuLateralData } from "@/json/picture/menuLateralData";

import { setComponent } from "@/redux/menuLateralEditSlice";
import { useState } from "react";

export default function MenuLateral() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleComponent = (component: string, index: number) => {
    dispatch(setComponent(component));
    setActiveIndex(index);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const openListClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-lateral">
      <div className="section-actions">
        <aside
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={openListClick}
        >
          <ul className="item-menu">
            {menuLateralData.map((menu, index) => (
              <li
                className={
                  index === activeIndex ? "item-menu-li active" : "item-menu-li"
                }
                key={index}
                onClick={() => handleComponent(menu.component, index)}
              >
                <FontAwesomeIcon
                  icon={menu.icon as IconProp}
                  className="icon"
                />
                {isOpen && (
                  <a href="#" className="anchor">
                    {menu.text}
                  </a>
                )}
                <p className="text">{menu.text}</p>
              </li>
            ))}
          </ul>
      

          <div className="clear-fixed"></div>
        </aside>
      </div>
    </div>
  );
}
