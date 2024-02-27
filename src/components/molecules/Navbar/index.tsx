import style from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.searchBar}>
        <div>
          <img src="/imgs/search.png" alt="" />
        </div>
        <input type="text" />
      </div>
      <ul>
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Todays deals</li>
      </ul>
    </div>
  );
};

export default Navbar;
