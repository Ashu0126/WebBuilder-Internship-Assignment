import style from "./index.module.scss";

const Breadcrumb = (props: { breadCrumbs: any }) => {
  const { breadCrumbs } = props;

  return (
    <div className={style.breadcrumbContainer}>
      {breadCrumbs?.map((item: any) => (
        <a key={item} href="#">
          {item}
        </a>
      ))}
    </div>
  );
};

export default Breadcrumb;
