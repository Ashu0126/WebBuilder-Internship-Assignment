import style from "./index.module.scss";

export const FooterTabs = () => {
  return (
    <div className={style.footerTabs}>
      <p>Categories</p>
      <ul>
        <li>Web Builder</li>
        <li>Hosting</li>
        <li>Data Center</li>
        <li>Robotic-Automation</li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={style.footer}>
      <FooterTabs />
      <FooterTabs />
      <p>Language</p>
    </div>
  );
};

export default Footer;
