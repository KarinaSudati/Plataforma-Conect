import s from "./infoCard.module.scss";

const InfoCard = (props) => {
  return (
    <article className={s.article}>
      <img src={props.img} alt={props.alt} />

      <div className={s.content}>
        <h2>{props.subtitle}</h2>
        <p>{props.paragrafo}</p>

        <button>{props.textoBotao}</button>
      </div>
    </article>
  );
};
export default InfoCard;
