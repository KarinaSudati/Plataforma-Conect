import s from "./toast.module.scss";
import iconeSucesso from "../../assets/icones/iconeSucesso.png";

const Toast = ({ mensagem, visivel }) => {
  if (!visivel) return null;

  return (
    <div className={s.toastContainer}>
      <img src={iconeSucesso} alt="Sucesso" className={s.icone} />
      <div className={s.texto}>
        <p>{mensagem}</p>
        <div className={s.barraProgresso}></div>
      </div>
    </div>
  );
};

export default Toast;
