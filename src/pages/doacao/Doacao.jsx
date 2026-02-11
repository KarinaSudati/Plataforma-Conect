import InfoCard from "../../components/infoCard/infoCard";
import s from "./doacao.module.scss";
import igFamilia from "../../assets/imagens/igFamilia.png";
import projetoFuturo from "../../assets/imagens/projetoFuturo.png";
import conectaJovem from "../../assets/imagens/conectaJovem.png";

const Doacao = () => {
  return (
    <main className={s.doacaoPage}>
      <h1>Doação</h1>
      <section className={s.containerCards}>
        <InfoCard
          img={igFamilia}
          alt="Pessoa carregando caixa com alimentos"
          subtitle="Instituto grande familia"
          paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          textoBotao="Quero Doar"
        />
        <InfoCard
          img={projetoFuturo}
          alt="Livros e materiais escolares"
          subtitle="Projeto Futuro na Escola"
          paragrafo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos."
          textoBotao="Quero Doar"
        />
        <InfoCard
          img={conectaJovem}
          alt="Pessoas mexendo em computadores"
          subtitle="Instituto Conecta Jovem"
          paragrafo="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital."
          textoBotao="Quero Doar"
        />
      </section>
    </main>
  );
};
export default Doacao;
