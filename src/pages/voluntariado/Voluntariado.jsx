import s from "./voluntariado.module.scss";
import InfoCard from "../../components/infoCard/infoCard";
import mutiraoReciclagem from "../../assets/imagens/mutiraoReciclagem.png";
import aulasTecnologia from "../../assets/imagens/aulasTecnologia.png";
import esporteInclusao from "../../assets/imagens/esporteInclusao.png";

const voluntariado = () => {
  return (
    <main className={s.doacaoPage}>
      <h1>Voluntariado</h1>
      <section className={s.containerCards}>
        <InfoCard
          img={mutiraoReciclagem}
          alt="Pessoas coletando materiais reciclavéis"
          subtitle="Mutirão de reciclagem"
          paragrafo="Coletar materiais recicláveis e orientar sobre descarte consciente."
          textoBotao="Quero Participar"
        />
        <InfoCard
          img={aulasTecnologia}
          alt="Pessoas ensinando tecnologia"
          subtitle="Aulas de Tecnologia"
          paragrafo="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
          textoBotao="Quero Participar"
        />
        <InfoCard
          img={esporteInclusao}
          alt="Pessoas incentivando a participação no esporte"
          subtitle="Esporte e Inclusão"
          paragrafo="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
          textoBotao="Quero Participar"
        />
      </section>
    </main>
  );
};
export default voluntariado;
