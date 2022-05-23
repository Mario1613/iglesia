import styled from "styled-components";
import Logo from '../Home/logo.png';
import styles from '../Nav/styles/Nav.module.css'
import {
  Link
 
} from "react-router-dom";
import BurguerButton from "../../components/BurguerButton";
import {useState} from 'react';
import Perfil from '../Nav/Perfil.jpg';


function Nav (){
  const [state, setState] = useState(false);
  const [clicked, setClicked] = useState(false);

    return(
   
  <Header>
    <div className={styles.barOne}>
      <LogoStyled src={Logo} alt="Logo"/>
     <h1 className={styles.H1Principal}>Iglesia Pentecostal Del Nombre De Jesús</h1>
    </div>

    <nav className={`barTwo ${clicked ? 'active' : ''}`}>
      <UnorderedList>
        <Navegacion>
          <Link to="/" className={styles.navegacion}>Inicio</Link>
        </Navegacion>

        <Navegacion>
          <button onClick={() => setState(!state)} className={styles.navegacionc}>Pastor</button>
        </Navegacion>
 
        <Navegacion>
        <a href="#nosotros" className={styles.navegacion}>Nosotros</a>  
        </Navegacion>

        <Navegacion>
         <a href="#contacto" className={styles.navegacion}>Contacto</a>
        </Navegacion>       
        
      </UnorderedList>
      </nav>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={() => setClicked(!clicked)} />
      </div> 

      <div className={`biografia ${state ? 'active' : ''}`}>
        <div className='minContainer'>

        <img src={Perfil} alt="Logo" className="imgsize"/>
        <div>
          <h2>Iván Alberto Cuenca Robles</h2>
         
        <button className="btnModal" onClick={() => setState(!state)} >Cerrar</button>
        </div>

        </div>

      </div>
    </Header>
    )
}

export default Nav;

const Header = styled.header`
  
    .burguer{
  @media(min-width: 768px){
      display: none;
    }
    width: 33px;
    height: 25px;
    margin: -50px 86%;
    position: absolute;
    cursor: pointer;
    display: inline-block;
  }
 
  .barTwo{
    background-color:var(--morado);
    margin-top: -1rem;

}
@media(max-width:767px){
  .barTwo{
      
      margin-top: -52px;
     transform: translateX(-100%);
        width: 80%; 
        height: 100%;
        color: #4A5EA2;
        background-color:var(--white);
        transition-duration: 500ms;
        position: fixed;
  z-index: 2;
    }
    .barTwo.active{
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
.biografia{
    display: none;
    transform: translateX(-100%);
    transition-duration: 500ms;
}
.imgsize{
  width: 100%;
@media(min-width:768px){
 
  width: 80%;
  }
}



.biografia.active{
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
  
  
  @media(min-width:768px){
    
    width:70%;
        margin-top: -17px;
        height:40%;
        margin-left: 26%;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 1rem 0;
        box-shadow: -4px 5px 8px #00000048;
    
}
@media(min-width:820px){
        margin-left: 31%;
        width:60%;
        height:30%;
}
@media(min-width:1024px){
        margin-left: 48%;
        width:40%;
        height:30%;
        position: absolute;
}
@media(min-width:1333px){
        margin-left: 60%;
        width:30%;
        height:30%;
}
@media(min-width:1600px){
        margin-left: 69%; 
        height:35%;
  }
}
.minContainer{
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  .btnModal{
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

  }



  @media(min-width:768px){
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    grid-gap:-1rem; 
    height: 100%;
    display: grid;

}

  }
   





















    
`;


const Navegacion = styled.li`
list-style:none;
/* margin-right:1.4rem; */

color: white ;

color: var(--morado);
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: bold;

@media(max-width:767px){
  margin-top: .5rem;
}

`;

const UnorderedList = styled.ul`
@media (min-width: 768px){

display:flex;
justify-content:flex-end;
margin-right:15rem ;
}
@media (max-width:767px){
  margin-top: 120px;
}
`;

const LogoStyled = styled.img`
@media(max-width: 500px){
  display:none;
}

@media(min-width: 400px){
  width:10% ;
}
margin: 0 0.5rem 0 .5rem ;

@media(min-width:1024px){
width:6% ;
height:5% ;
margin: 0 1rem 0 1.8rem ;
}

`;