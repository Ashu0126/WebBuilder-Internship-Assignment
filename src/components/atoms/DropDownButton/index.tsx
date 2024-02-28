import style from "./index.module.scss";

const DropDownButton = ({ btnText }: any) => {
  return (
    <button className={style.dropDownContainer}>
      {btnText}
      <img src="/imgs/down.png" alt={btnText} />
    </button>
  );
};

export default DropDownButton;
