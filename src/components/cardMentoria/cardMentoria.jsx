const CardMentoria = ({ img, titulo, descricao, aoClicar }) => {
  return (
    <article>
      <img
        src={img}
        alt={titulo}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      <h3 style={{ color: "#1b3d6d", marginBottom: "15px", fontSize: "22px" }}>
        {titulo}
      </h3>
      <p
        style={{
          color: "#4a5568",
          fontSize: "14px",
          marginBottom: "25px",
          lineHeight: "1.6",
        }}
      >
        {descricao}
      </p>
      <button
        onClick={aoClicar}
        style={{
          backgroundColor: "#235d91",
          color: "white",
          border: "none",
          padding: "12px 30px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {" "}
        Quero Participar
      </button>
    </article>
  );
};

export default CardMentoria;
