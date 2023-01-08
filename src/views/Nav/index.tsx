import styled from "styled-components";
import Logo from "../Home/logo.png";
import styles from "../Nav/styles/Nav.module.css";
import { Link } from "react-router-dom";
import BurguerButton from "../../components/BurguerButton";

import Perfil from "../Nav/Perfil.jpg";
import { useState } from "react";

function Nav() {
  const [state, setState] = useState<boolean>(false);
  const [clicked, setClicked] = useState<Boolean>(false);

  return (
    <Header>
      <div className={styles.barOne}>
        <LogoStyled src={Logo} alt="Logo" />
        <h1 className={styles.H1Principal}>
          Iglesia Pentecostal Del Nombre De Jesús
        </h1>
      </div>

      <nav className={`barTwo ${clicked ? "active" : ""}`}>
        <UnorderedList>
          <Navegacion>
            <Link to="/" className={styles.navegacion}>
              Inicio
            </Link>
          </Navegacion>
          <Navegacion>
            <Link to="/books" className={styles.navegacion}>
              libros
            </Link>
          </Navegacion>

          <Navegacion>
            <button
              onClick={() => setState(!state)}
              className={styles.navegacionc}
            >
              Pastor
            </button>
          </Navegacion>

          <Navegacion>
            <a href="#nosotros" className={styles.navegacion}>
              Nosotros
            </a>
          </Navegacion>

          <Navegacion>
            <a href="#contacto" className={styles.navegacion}>
              Contacto
            </a>
          </Navegacion>
        </UnorderedList>
      </nav>
      <div className="burguer">
        <BurguerButton
          clicked={clicked}
          handleClick={() => {
            setState(false)
            setClicked(!clicked)}}
        />
      </div>

      <div className={`biografia ${state ? "active" : ""}`}>
        <div className="minContainer">
          <img src={Perfil} alt="Logo" className="imgsize" />
          <div className="sectionTexto">
            <h3>Iván Alberto Cuenca Robles</h3>
            <p style={{ textAlign: "justify" }}>
              Es oriundo de Jamundí Valle en el país de Colombia, nacido el 25
              de Septiembre de 1976, al nacer sus padres eran cristianos de la
              Iglesia del nombre de Jesús, es nacido en un hogar cristiano y
              toda su vida ha estado en los caminos del Señor Jesucristo, ha
              sido servidor en la Iglesia desde niño predicando en los cultos de
              niños, en la adolescencia, en la juventud y en su edad adulta,
              hace 16 años sirve en el santo ministerio en países como España y
              Estados Unidos, por la gracia del Señor Jesús ha podido cursar sus
              estudios como Lice. en Teología, Doctorado en Filosofía y Ciencias
              Religiosas, diplomados en Teología, Consejería Familiar, Ciencia y
              Fe, Comunicación Radial y Televisión, Capellanía Internacional,
              Defensor en Derechos Humanos entre otros, Actualmente es pastor en
              Sarasota Florida en los Estados Unidos.
            </p>

            <button className="btnModal" onClick={() => setState(!state)}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Nav;

const Header = styled.header`
  .burguer {
    display: none;
    margin: -50px 86%;
    @media(max-width: 768px){
      width: 33px;
      height: 30px;
      position: absolute;
      cursor: pointer;
      display: inline-block;
    }
  }

  .barTwo {
    background-color: var(--morado);
  }
  @media (max-width: 767px) {
    .barTwo {
      /* margin-top: -52px; */
      transform: translateX(-100%);
      width: 80%;
      height: 100%;
      color: #4a5ea2;
      background-color: var(--white);
      transition-duration: 500ms;
      position: fixed;
      top:0;
      z-index: 2;
    }
    .barTwo.active {
      height: 100%;
      /* position: relative; */
      position: fixed;
      display: block;
      transform: translateX(0);
    }
  }

  /*

Modal
*/
  .biografia {
    display: none;
    transform: translateX(-100%);
    transition-duration: 500ms;
  }
  .imgsize {
    width: 100%;
    grid-area: "img";
  }
  .sectionTexto {
    grid-area: "texto";
  }

  .biografia.active {
    transform: translateX(0);
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    
    display: block;
    background: white;
    width: 80%;

    margin-top: -52px;
    padding-top: 1rem;
    z-index: 2;

    @media (min-width: 768px) {
      position: absolute;
      margin-top: .01rem;
      margin-left: 69vw;
      width: 30vw;
      height: 70vh;
      /* margin-left: 26%; */
      font-size: 1.2rem;
      font-weight: bold;
      padding: 1rem 0;
      box-shadow: -4px 5px 8px #00000048;
    }
  
  
  }
  .minContainer {
    display: grid;
    grid-gap: 1rem;
    grid-template-areas:
      "img img img " /* Primera Fila */
      "texto" "texto" "texto"
      "texto" "texto" "texto"
      "texto" "texto" "texto";
    /* grid-template-columns: 1fr; */
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
    .btnModal {
      background-color: var(--morado);
      color: var(--white);
      border: none;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      margin-top: 1rem;
      margin-left: 65%;
      margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
      grid-template-areas:
        "img texto texto " /* Primera Fila */
        "img" "texto" "texto"
        "texto" "texto" "texto"
        "texto" "texto" "texto";
    }
  }
`;

const Navegacion = styled.li`
  list-style: none;
  /* margin-right:1.4rem; */

  color: white;

  color: var(--morado);
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
`;

const UnorderedList = styled.ul`
  margin: 0px;
  @media (min-width: 768px) {
    margin-right: 12rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 780px) {
    margin-right: 15rem;
  }
  @media (max-width: 767px) {
    margin-top: 120px;
  }
`;

const LogoStyled = styled.img`
  @media (max-width: 500px) {
    display: none;
  }

  @media (min-width: 400px) {
    width: 10%;
  }

  /* margin: 0rem 1rem 1rem .5rem; */

  @media (min-width: 1024px) {
    width: 6%;
    /* height: 5%; */
  }
`;
