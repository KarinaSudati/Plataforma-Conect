import s from "./mentoria.module.scss";
import InfoCard from "../../components/infoCard/infoCard";
import mentoriaCarreira from "../../assets/imagens/mentoriaCarreira.png";
import compartilheExperiencia from "../../assets/imagens/compartilhe-experiencia.png";
import acompanhamento from "../../assets/imagens/acompanhamento.png";

const Mentoria = () => {
  return (
    <main className={s.mentoriaPage}>
      <h1>Mentoria</h1>
      <section className={s.mentoriaCards}>
        <InfoCard
          img={mentoriaCarreira}
          alt="Reunião de Pessoas para fazer Mentoria"
          subtitle="Mentoria de Carreira e Emprego"
          paragrafo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
          textoBotao="Quero participar"
        />
        <InfoCard
          img={compartilheExperiencia}
          alt="Pessoas Compartilhando experiências Profissionais"
          subtitle="Compartilhe Experiência"
          paragrafo="Oriente jovens e profissionais iniciantes em sua área."
          textoBotao="Quero participar"
        />
        <InfoCard
          img={acompanhamento}
          alt="Pessoas fazendo acompanhamento de carreira"
          subtitle="Acompanhamento"
          paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento."
          textoBotao="Quero participar"
        />
      </section>
    </main>
  );
};

export default Mentoria;
