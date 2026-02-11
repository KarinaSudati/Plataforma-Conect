import s from "./eventosEP.module.scss";
import InfoCard from "../../components/infoCard/infoCard";
import empoderandoJovens from "../../assets/imagens/empoderandoJovens.png";
import tecnologiaTranforma from "../../assets/imagens/tecnologiaTranforma.png";
import carreiraEmprego from "../../assets/imagens/carreiraEmprego.png";

const EventosEP = () => {
  return (
    <main className={s.eventoPage}>
      <h1>Eventos & Palestras</h1>
      <section className={s.eventoCard}>
        <InfoCard
          img={empoderandoJovens}
          alt="Jevens participando de uma reunião social e motivacional"
          subtitle="Empoderando Jovens para o Futuro"
          paragrafo="Atividade: Palestra motivacional sobre liderança jovem e transformação social.
            Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
          textoBotao="Quero participar"
        />
        <InfoCard
          img={tecnologiaTranforma}
          alt="Pessoas aprendendo a programar"
          subtitle="Tecnologia que Transforma"
          paragrafo="Atividade: Workshop de introdução à programação e inovação digital.
            Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
          textoBotao="Quero participar"
        />
        <InfoCard
          img={carreiraEmprego}
          alt="Pessoas participando de uma palestra"
          subtitle="Carreira e Primeiro Emprego"
          paragrafo="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.
            Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
          textoBotao="Quero participar"
        />
      </section>
    </main>
  );
};

export default EventosEP;
