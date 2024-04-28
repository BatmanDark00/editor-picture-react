import "@/assets/scss/components/section_aside/AsideBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { menuLateralData } from "@/json/picture/menuLateralData";

export default function MenuLateral() {
  return (
    <>
      <div className="clear-fixed"></div>
      <section>
        <aside>
          {menuLateralData.map((menu, index) => (
            <div className="item-menu" key={index}>
              <button>
                <FontAwesomeIcon icon={menu.icon as IconProp} />
              </button>
              <p>{menu.text}</p>
            </div>
          ))}

          <div className="clear-fixed"></div>
        </aside>
      </section>
    </>
  );
}
