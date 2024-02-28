import Button from "../../atoms/Button";
import Rating from "../../atoms/Rating";
import style from "./index.module.scss";

interface ITiles {
  tag?: {
    tagIcon: string;
    tagName: string;
  };
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
      {tag && (
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
        <button>{tileDescription?.btnText}</button>
      </div>
      <div className={style.ratingContainer}>
        <div className={style.rating}>
          <p className={style.rate}>{tileRatingInfo?.ratings?.rating}</p>
          <p>{tileRatingInfo?.ratings?.rateInfo}</p>
          <div className={style.stars}>
            <Rating rating={7.8} />
          </div>
        </div>
        <Button btnText={tileRatingInfo?.btnText} />
      </div>
    </div>
  );
};

export default Tiles;
