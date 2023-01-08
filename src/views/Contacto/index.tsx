import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { BtnLink } from '../../components/BtnLink';
import { Modal } from '../../components/Modal';
import styles from '../Contacto/styles/contacto.module.css';
import styleLink from '../../components/styles/btnEnlace.module.css';
import IMG from '../Contacto/img/QR.png';





const Contacto =()=>{
  interface Datas{
    imgcontact:{
      url:string
    }, 
    tcontact:string, 
    tsubcontact:string, 
    pcontact:string, 
    tsubcontact2:string, 
    pcontact2:string,
    pcontact3:string, 
    pcontact4:string
  }


  const [datas, setDatas] = useState<Array<Datas>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stateModalOne, changeStateModalOne] = useState<boolean>(false)
  const navigate = useNavigate()
  useEffect(()=>{
    const consultarAPI = async () =>{
    try{
    const url:string = 'https://dolphin-app-rn85f.ondigitalocean.app/section-contactos';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json()
    setDatas(resultado)
    setIsLoading(false)
      }catch(error){
        console.log('error') 
      }
    }
    consultarAPI();
  },[]);

  const changeView = ()=>{
    navigate("/capellania")
  }
  
if(isLoading){
  return <h1>Cargando...</h1>
}

 const {imgcontact, tcontact, tsubcontact, pcontact, tsubcontact2, pcontact2,pcontact3, pcontact4} = datas[0];
 const {url} = imgcontact;

 
  return (
    <section id='contacto'>
        <div className={styles.background}>
            <div className={styles.container}>
                <Centrador>
                <video className={styles.pixelImg} controls >
                    <source src={url}  type="video/mp4" />
                </video>    
                    <div className={styles.sectionText}>        
                        <h2 className={styles.tituloContacto}>{tcontact}</h2>
                        <h3>{tsubcontact}</h3>
                        <p>{pcontact}</p>
                        <h3>{tsubcontact2}</h3>
                        <p>{pcontact2}</p>
                        <p>{pcontact3}</p>
                        <p>{pcontact4}</p>
                      <div className={styles.btnCentrador}>
                       
                        <BtnLink enlace={"https://www.facebook.com/profile.php?id=100044996093662"} nameLink={'Facebook'}/>
                        <button className={styleLink.enlaceStyle} onClick={()=>changeStateModalOne(!stateModalOne)}>Donaciones</button>
                        
                       <button onClick={changeView} className={styleLink.enlaceStyle}>Capellania</button>
                        {/* <BtnLink enlace={"https://www.facebook.com/mario.cortezcortes/"} nameLink={'Correo'}/> */}
                  
                      </div>
                      {/* MODAL */}
                      <Modal
                        state={stateModalOne}
                        changeState={changeStateModalOne}
                      >
                        { <BodyModal>
                          <QR src={IMG} alt="QR" />
                          </BodyModal>}
                      </Modal>  
                    
                    </div>
                </Centrador>
            </div>
        </div>
    </section>
  )
}

export default Contacto

const Centrador = styled.div`
    @media (min-width:992px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-self: center;
          align-content: center;
          gap: 3rem;
          height: 500px;    
    }
  `;
  const BodyModal = styled.div` 
  display: flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
`;
  const QR = styled.img`
  width: 100%;
  height:100%;


`;

