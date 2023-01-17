import styled from "styled-components";
import Logo from "../Home/logo.png";
import styles from "../Nav/styles/Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import BurguerButton from "../../components/BurguerButton";
import Perfil from "../Nav/Perfil.jpg";
import { useState } from "react";
const Header = styled.header`
  .burguer {
    display: none;
    margin: -50px 86%;
    @media (max-width: 768px) {
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
      transform: translateX(-100%);
      width: 80%;
      height: 100%;
      color: #4a5ea2;
      background-color: var(--white);
      transition-duration: 500ms;
      position: fixed;
      top: 0;
      z-index: 2;
    }
    .barTwo.active {
      height: 100%;
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
  @media (min-width: 768px) {
    .biografia {
      display: block;
      transform: translateX(100%);
      transition-duration: 500ms;
      position: fixed;
      z-index: 3;
      overflow-y: scroll;
      background: white;
      margin-top: 2rem;
      margin-left: 69vw;
      width: 31vw;
      height: 70vh;
      padding: 1rem 0;
      transition: all 3s ease;
      box-shadow: -4px 5px 8px #00000048;
      font-size: 1.1rem;
      font-weight: 500;
    }
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
    z-index: 3;

    @media (min-width: 768px) {
      margin-top: 2rem;
      margin-left: 69vw;
      width: 30vw;
      height: 70vh;
      font-size: 1.1rem;
      font-weight: 500;
      padding: 1rem 0;
      box-shadow: -4px 5px 8px #00000048;
    }
  }
  .buttonEmergente {
    display: none;
  }
  @media (min-width: 768px) {
    .visible {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .buttonEmergente {
      box-shadow: -4px 5px 8px #00000048;
      cursor: pointer;
      width: 6rem;
      position: fixed;
      display: flex;
      right: 0rem;
      height: 2rem;
      background: linear-gradient(to right, #f17a11, #ffb20d);
      border-start-start-radius: 1rem;
      border-end-start-radius: 1rem;
      transition: all 3s ease;
      align-items: center;
      padding-left: 1rem;
      z-index: 3;
    }
    .textoButtonEmergente {
      color: white;
      font-weight: 600;
      letter-spacing: 1px;
      transition-duration: 500ms;
    }
    .textoButtonEmergente.blur {
      display: flex;
    }
    .buttonEmergente.blur {
      padding-right: 30vw;
    }
  }
  .imgSize {
    width: 100%;
    border-radius: 5px;
    @media (min-width: 768px) {
      float: left;
      padding: 0.5rem 1rem 1rem 0.5rem;
      width: 45%;
    }
  }

  .parrafo {
    max-width: 90%;
    margin: 0 auto;
    line-height: 1.5;

 
  }
`;
function Nav() {
  const [state, setState] = useState<boolean>(false);
  const [clicked, setClicked] = useState<Boolean>(false);
  const [blur, setBlur] = useState(false);
  const navigate = useNavigate();

  return (
    <Header>
      <div className={styles.barOne}>
        <LogoStyled src={Logo} alt="Logo" onClick={() => navigate("/")} />
        <h1 className={styles.H1Principal} onClick={() => navigate("/")}>
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
          <div className="visible">
            <Navegacion>
              <button
                onClick={() => setState(!state)}
                className={styles.navegacionc}
              >
                Pastor
              </button>
            </Navegacion>
          </div>

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
      <div
        className={`buttonEmergente ${blur && "blur"}`}
        onClick={() => setBlur(!blur)}
      >
        <h4 className={`textoButtonEmergente ${blur && "blur"}`}>Pastor</h4>
      </div>
      <div className="burguer">
        <BurguerButton
          clicked={clicked}
          handleClick={() => {
            setState(false);
            setClicked(!clicked);
          }}
        />
      </div>

      <div className={`biografia ${blur || state ? "active" : ""}`}>
        <div className="parrafo">
          <img src={Perfil} alt="Logo" className="imgSize" />
          <div className="sectionTexto">
            <h3
            style={{
              fontWeight:"bold",
              fontSize:"1.2rem"
            }}
            >Iván Alberto Cuenca Robles</h3>
            <p style={{ textAlign: "justify"}}>
              ES ORIUNDO DE JAMUNDÍ VALLE EN 
              EL PAÍS DE COLOMBIA, NACIDO EL 25
              DE SEPTIEMBRE DE 1976, DE HOGAR Y 
              PADRES CRISTIANOS EN LA IGLESIA
              DEL NOMBRE DE JESÚS, HASTA EL DÍA 
              DE HOY Y POR LA GRACIA DEL SEÑOR
              JESUCRISTO SIGUE PERSISTIENDO EN SUS CAMINOS.
              <br/> 
              SERVIDOR DESDE SU
              INFANCIA EN DISTINTAS AREAS DE LA IGLESIA Y EN SU EDAD ADULTA A
              LLEVADO EL EVANGELIO A PAÍSES COMO ESPAÑA Y EEUU
              <br/>
               LA MISERICORDIA
              DEL SEÑOR JESUCRISTO LE HA PERMITIDO OBTENER MÁS CONOCIMIENTO POR
              MEDIO DE LA LIC. EN TEOLOGIA .............................
            </p>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Nav;

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
  cursor: pointer;
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
