import imagem from "../../assets/imagens/mundo.png";
import s from "./paginaInicial.module.scss";

const PaginaInicial = () => {
  return (
    <main className={s.main}>
      <section className={s.info}>
        <h1>Projetos Sociais que transformam</h1>
        <p>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>
        <button>Cadastrar Empresa ➔</button>
        <section className={s.infoDados}>
          <article>
            <h2>500+</h2>
            <h3>Empresas Voluntárias</h3>
          </article>
          <article>
            <h2>1.2K+</h2>
            <h3>Projetos Realizados</h3>
          </article>
          <article>
            <h2>50K+</h2>
            <h3>Vidas Impactadas</h3>
          </article>
        </section>
      </section>
      <img src={imagem} alt="Imagem de mãos segurando o globo terrestre" />
    </main>
  );
};

export default PaginaInicial;
