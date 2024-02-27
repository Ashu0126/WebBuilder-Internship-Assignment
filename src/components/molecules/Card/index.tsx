import Button from "../../atoms/Button";
import style from "./index.module.scss";

const Card = () => {
  return (
    <div className={style.cardContainer}>
      <img src="/imgs/card_img.png" alt="" />
      <ul className={style.cardTab}>
        <li>20% Off</li>
        <li>Limited time</li>
      </ul>
      <h4>Webbuilder 1</h4>
      <p>Computer Modern clasic with wix support</p>
      <ul className={style.prices}>
        <li className={style.currentPrice}>$39.96</li>
        <li className={style.prevPrice}>$49.96</li>
        <li className={style.discount}>(20% Off)</li>
      </ul>
      <Button btnText="View Deal" />
    </div>
  );
};

export default Card;
