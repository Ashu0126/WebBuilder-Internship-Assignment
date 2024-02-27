import style from "./index.module.scss";

const Button = (props: { btnText: string }) => {
  const { btnText } = props;
  return <button className={style.btn}>{btnText}</button>;
};

export default Button;
