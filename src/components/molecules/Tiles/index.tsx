import Button from "../../atoms/Button";
import DropDownButton from "../../atoms/DropDownButton";
import Rating from "../../atoms/Rating";
import style from "./index.module.scss";

interface ITiles {
  tag?: any;
  tileImg: { img: string; caption: string };
  tileDescription: {
    tilePara: string;
    highLightHead: string;
    highLightText: string;
    btnText: string;
  };
  tileRatingInfo: {
    ratings: {
      rating: string;
      rateInfo: string;
    };
    btnText: string;
  };
  index: number;
}

const Tiles = (props: ITiles) => {
  const { tag, tileImg, tileDescription, tileRatingInfo, index } = props;

  return (
    <div className={style.tileContainer}>
      {Object.values(tag).length != 0 && (
        <div className={style.tag}>
          <img src={tag?.tagIcon} alt={tag?.tagName} />
          {tag?.tagName}
        </div>
      )}
      <div className={style.index}>{index}</div>
      <div className={style.imgSection}>
        <img src={tileImg?.img} alt={tileImg?.caption} />
        <p>{tileImg?.caption}</p>
      </div>
      <div className={style.tileInfo}>
        <p dangerouslySetInnerHTML={{ __html: tileDescription?.tilePara }} />
        <h4>{tileDescription?.highLightHead}</h4>
        <p className={style.highlights}>{tileDescription?.highLightText}</p>
        <DropDownButton btnText={tileDescription?.btnText} />
      </div>
      <div className={style.ratingContainer}>
        <div className={style.rating}>
          <p className={style.rate}>{tileRatingInfo?.ratings?.rating}</p>
          <p>{tileRatingInfo?.ratings?.rateInfo}</p>
          <div className={style.stars}>
            <Rating rating={tileRatingInfo?.ratings?.rating} />
          </div>
        </div>
        <Button btnText={tileRatingInfo?.btnText} />
      </div>
    </div>
  );
};

export default Tiles;
