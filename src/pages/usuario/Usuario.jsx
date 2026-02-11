import s from "./usuario.module.scss";
import { GrLocation, GrMailOption, GrCalendar } from "react-icons/gr";

const Usuario = () => {
  return (
    <main className={s.main}>
      <section>
        <img
          src="https://avatars.githubusercontent.com/u/168477392?s=400&u=eb80ef5ef85651994f9fe55233a8e25d2ce78b70&v=4"
          alt="imagem do perfil do usuário"
        />
        <div className={s.div}>
          <h1>Karina Sudati</h1>
          <h2>Voluntário Ativo</h2>
          <p>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>
          <ul>
            <li className={s.icon}>
              <GrLocation /> Araraquara - SP
            </li>
            <li>
              <GrMailOption /> karinaadssudati@gmail.com
            </li>
            <li>
              <GrCalendar /> desde Janeiro 2022
            </li>
          </ul>
          <ul>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Usuario;
