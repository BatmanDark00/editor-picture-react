
import headerModule from "@/modules/common/components/home/header/header.module.scss";

export default function Header() {
  return (
    <header className={headerModule.header}>
      <nav>
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Acerca de</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
