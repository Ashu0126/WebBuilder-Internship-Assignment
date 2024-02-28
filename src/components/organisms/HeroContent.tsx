import pageData from "@/src/data/main.json";
import style from "./index.module.scss";
import Breadcrumb from "@/src/components/atoms/Breadcrumb";
import Tiles from "@/src/components/molecules/Tiles";
import { Fragment } from "react";
import Card from "@/src/components/molecules/Card";
import Button from "@/src/components/atoms/Button";
import DropDownButton from "@/src/components/atoms/DropDownButton";

const HeroContent = () => {
  const formattedDate = new Date();
  const options: any = { month: "long", day: "numeric", year: "numeric" };
  const displayDate = formattedDate.toLocaleDateString("en-US", options);

  return (
    <main className={style.heroContainer}>
      <h1>{pageData?.mainHeading}</h1>
      <hr />
      <div className={style.subHead}>
        <div className={style.metaInfo}>
          {pageData?.metaData?.data?.map((item: any) => (
            <span key={item?.text}>
              <img src={item?.icon} alt={item?.text} />
              <p>
                {item?.text}
                {item === pageData?.metaData?.data?.[0] && displayDate}
              </p>
            </span>
          ))}
        </div>
        <DropDownButton btnText={pageData?.metaData?.filter} />
      </div>
      <hr />
      <ul className={style.tabs}>
        {pageData?.tab?.map((tab: string) => (
          <li key={tab}>{tab}</li>
        ))}
      </ul>
      <Breadcrumb breadCrumbs={pageData?.breadCrumbs} />
      <div className={style.tilesContainer}>
        {pageData?.tiles?.map((tile: any, index: number) => (
          <Fragment key={tile}>
            <Tiles
              tag={tile?.tag}
              tileImg={tile?.tileImg}
              index={index + 1}
              tileDescription={tile?.tileDescription}
              tileRatingInfo={tile?.tileRatingInfo}
            />
          </Fragment>
        ))}
      </div>
      <div className={style.dealsContainer}>
        <h2>{pageData?.dealsHeadings}</h2>
        <div className={style.deals}>
          {pageData?.deals?.map((deal: any) => (
            <Fragment key={deal}>
              <Card
                img={deal?.img}
                offers={deal?.offers}
                heading={deal?.heading}
                info={deal?.info}
                prices={deal?.prices}
                btnText={deal?.btnText}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div className={style.signUp}>
        <h2>{pageData?.signUpLetter?.content}</h2>
        <div className={style.email}>
          <input type="email" />
          <Button btnText={pageData?.signUpLetter?.btnText} />
        </div>
      </div>
    </main>
  );
};

export default HeroContent;
