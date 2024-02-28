"use client";
import { useState } from "react";
import style from "./index.module.scss";
import pageData from "@/src/data/navbar.json";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = () => {
    setOpen(!open);
  };

  return (
    <div className={style.navbar}>
      <div className={style.searchBar}>
        <div>
          <img src={pageData?.inputSearchImg} alt="" onClick={menu} />
        </div>
        <input type="text" />
      </div>
      <div className={`${style.navTabs} ${open ? style.show : ""}`}>
        <img src={pageData?.crossIcon} alt="close" onClick={menu} />
        <ul>
          {pageData?.navTab?.map((tab: string) => (
            <li key={tab}>{tab}</li>
          ))}
        </ul>
      </div>
      <img
        className={style.more}
        onClick={menu}
        src={pageData?.menuIcon}
        alt="menu"
      />
    </div>
  );
};

export default Navbar;
