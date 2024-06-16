import footerModule from "@/modules/common/components/home/footer/footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={footerModule.footer}>
      <address>Jinotega, Nicaragua </address>
    <small> &copy; Derechos Reservados {year} </small>
    </footer>
  );
}
