import Navbar from "@/src/components/molecules/Navbar";
import pageData from "@/src/data/main.json";
import style from "./index.module.scss";
import Breadcrumb from "@/src/components/atoms/Breadcrumb";
import Tiles from "@/src/components/molecules/Tiles";
import { Fragment } from "react";
import Card from "@/src/components/molecules/Card";
import Footer from "@/src/components/molecules/Footer";
import Button from "@/src/components/atoms/Button";

export default function Home() {
  return (
    <div className={style.container}>
      <Navbar />
      <main>
        <h1>{pageData?.mainHeading}</h1>
        <hr />
        <hr />
        <ul className={style.tabs}>
          {pageData?.tab?.map((tab: string) => (
            <li key={tab}>{tab}</li>
          ))}
        </ul>
        <Breadcrumb />
        <div className={style.tilesContainer}>
          {pageData?.tiles?.map((tile: any) => (
            <Fragment key={tile}>
              <Tiles />
            </Fragment>
          ))}
        </div>
        <div className={style.dealsContainer}>
          <h2>{pageData?.dealsHeadings}</h2>
          <div className={style.deals}>
            {pageData?.deals?.map((deal: any) => (
              <Fragment key={deal}>
                <Card />
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
      <Footer />
    </div>
  );
}
