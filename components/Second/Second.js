import React from "react";
import "./Second.css";
import formula1 from "../../public/images/formula1.jpg";
import Image from "next/image";

export default function Second() {
  return (
    <>
      <section className="second">
        <div className="imagem-second">
          <Image src={formula1} id="formula1" alt="caminhao" />
        </div>
        <div className="texto-second">
          <h4>Mais e ái?</h4>
          <h1>QUAL SÃO NOSSOS OBJETIVOS?</h1>
          <p>
            Nossos objetivos são simples e diretos: aprimorar a assertividade e
            a tomada de decisões relacionadas aos nossos serviços. Estamos
            comprometidos em garantir que cada interação conosco seja uma
            experiência excepcional, permitindo proporcionar: MAIS conforto,
            MAIS segurança e MAIS rapidez.
          </p>
        </div>
      </section>
      
    </>
  );
}
