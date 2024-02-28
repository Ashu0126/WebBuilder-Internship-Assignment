import Button from "../../atoms/Button";
import style from "./index.module.scss";

interface ICard {
  img: string;
  offers: any;
  heading: string;
  info: string;
  prices: {
    currPrice: string;
    prevPrice: string;
    discount: string;
  };
  btnText: string;
}

const Card = (props: ICard) => {
  const { img, info, offers, heading, prices, btnText } = props;

  return (
    <div className={style.cardContainer}>
      <img src={img} alt={heading} />
      <ul className={style.cardTab}>
        {offers?.map((offer: string) => (
          <li key={offer}>{offer}</li>
        ))}
      </ul>
      <h4>{heading}</h4>
      <p>{info}</p>
      <ul className={style.prices}>
        <li className={style.currentPrice}>{prices?.currPrice}</li>
        <li className={style.prevPrice}>{prices?.prevPrice}</li>
        <li className={style.discount}>{prices?.discount}</li>
      </ul>
      <Button btnText={btnText} />
    </div>
  );
};

export default Card;
