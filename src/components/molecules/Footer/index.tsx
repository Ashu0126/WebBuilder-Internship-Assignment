import { Fragment } from "react";
import DropDownButton from "../../atoms/DropDownButton";
import style from "./index.module.scss";
import pageData from "@/src/data/footer.json";

const Footer = () => {
  return (
    <div className={style.footer}>
      {pageData?.footerTabs?.map((item: any) => (
        <div key={item?.tabHeading} className={style.footerTabs}>
          <p>{item?.tabHeading}</p>
          <ul>
            {item?.tabs?.map((tab: string) => (
              <li key={tab}>{tab}</li>
            ))}
          </ul>
        </div>
      ))}

      <DropDownButton btnText={pageData?.languageBtn} />
    </div>
  );
};

export default Footer;
