import Button from "../../atoms/Button";
import style from "./index.module.scss";

const Tiles = () => {
  return (
    <div className={style.tileContainer}>
      <div className={style.tag}>
        <img src="/imgs/trophy.png" alt="" />
        Best Seller
      </div>
      <div className={style.index}>1</div>
      <div className={style.imgSection}>
        <img src="/imgs/card_img.png" alt="" />
        <p>Builder 1</p>
      </div>
      <div className={style.tileInfo}>
        <p>
          <span>WixPro 72-Inch Responsive Website Builder- </span>
          Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue)
        </p>
        <h4>Main highlights</h4>
        <p className={style.highlights}>
          [What You Get]: Gain access to the SiteCraft design studio, featuring
          a robust selection of design elements, SEO optimization tools, and
          e-commerce integrations.
        </p>
        <button>show more</button>
      </div>
      <div className={style.ratingContainer}>
        <div className={style.rating}>
          <p className={style.rate}>9.3</p>
          <p>Exceptional</p>
          <div className={style.stars}></div>
        </div>
        <Button btnText="View" />
      </div>
    </div>
  );
};

export default Tiles;
