import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./styles/Nosotros.module.css";

const Nosotros = () => {
  interface Dates {
    imgnosotros: {
      url: string;
    };
    tnosotros: string;
    pnosotros: string;
    pnosotros2: string;
    tmision: string;
    pmision: string;
    tvision: string;
    pvision: string;
  }

  const [dates, setDates] = useState<Array<Dates>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const baseURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const url: string = `${baseURL}/section-nosotros`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setDates(resultado);
        setIsLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    consultarAPI();
  }, []);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  const dato = dates.find((dato) => dato);

  return (
    <section id="nosotros">
      {(dato?.tnosotros !== "" ||
        dato?.tnosotros !== undefined ||
        dato?.tnosotros !== null) && (
        <div className={styles.background}>
          <div className={styles.container}>
            <Centrador>
              <video className={styles.pixelImg} controls>
                <source src={dato?.imgnosotros.url} type="video/mp4" />
              </video>{" "}
              <div className={styles.sectionText}>
                <h2>{dato?.tnosotros}</h2>
                <p>{dato?.pnosotros}</p>
                <p>{dato?.pnosotros2}</p>
                <h2>{dato?.tmision}</h2>
                <p>{dato?.pmision}</p>
                <h2>{dato?.tvision}</h2>
                <p>{dato?.pvision}</p>
              </div>
            </Centrador>
          </div>
        </div>
      )}
    </section>
  );
};
export default Nosotros;

const Centrador = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-self: center;
    align-content: center;
    gap: 3rem;
    height: 760px;
  }
`;
