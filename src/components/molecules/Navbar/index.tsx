import style from "./index.module.scss";
import pageData from "@/src/data/navbar.json";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.searchBar}>
        <div>
          <img src={pageData?.inputSearchImg} alt="" />
        </div>
        <input type="text" />
      </div>
      <ul>
        {pageData?.navTab?.map((tab: string) => (
          <li key={tab}>{tab}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
