import footerModule from "@/assets/styles/components/home/footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={footerModule.footer}>
      <address>Jinotega, Nicaragua </address>
    <small> &copy; Derechos Reservados {year} </small>
    </footer>
  );
}
