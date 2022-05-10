
import { useState } from 'react';
import styled from 'styled-components';

import styles from './styles/btnModal.module.css';

export const Modal = ({ children, state, changeState }: any) => {

  const [pasive, activo] = useState(false);


  return (
    <>
      {state &&
        <Overlay>
          <ContainerModal>
            <HeaderModal>

              <a className={styles.btnModal} style={{ background: '#A3CCEA' }} href="https://www.paypal.com/donate/?hosted_button_id=LWBCWMZ5LBWU6&source=qr">Enlace Directo</a>
              <button className={styles.btnModal} style={{ background: '#A3CCEA' }} onClick={() => activo(true)} >Zelle
                <br />
                <b style={{ color: '#000', fontSize: '.7rem' }}>Para los EE.UU</b></button>

              <button className={styles.btnModal} style={{ background: '##FF0000' }} onClick={() => changeState(false)} >Cerrar</button>




              <div className={`zelleModal ${pasive ? 'active' : ''}`} style={{ background: '#A3CCEA' }} >
                <div className="zelleModalContainer">
                  <p style={{color:'black'}}>ipnjfildelfia@gmail.com </p>
                  <button className={styles.btnModal} style={{ background: '##FF0000' }} onClick={() => activo(false)} >Cerrar Zelle</button>
                </div>
              </div>
            </HeaderModal>
            {children}
          </ContainerModal>
        </Overlay>
      }
    </>
  )
}



const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;


  top: 0;
  left: 0;

  background-color: rgba(0,0,0,0.5);
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const ContainerModal = styled.div`
  width: 70%;
  @media (min-width:1024px) {
    width: 25%;
  
  }
 
  /* height: 60%; */
  background-color: white;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(100,100,11,0.2) opx 7px 29px 0px;
  padding: 20px;
  left: -11%;
  @media(min-width:768px){
    left: -5%;
  }
  @media(min-width:1024px){
    left: 0;
  }

  
`;
const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 2rem;


.zelleModalContainer{
  max-width: 90%;
  margin: 0 auto;
}

.zelleModal{
    font-weight: bold;
  display: none;
  transform: translateX(-100%);
  transition-duration: 500ms;
  border-radius: 5px;
  
  
}


.zelleModal.active{
transform: translateX(0);
   position: fixed; 
display: block;
margin-left: 5rem;
    z-index: 2;
    width:52%;
    height:13%;
    margin-top: -12rem;
    
    
    @media(min-width:768px){
  
  width:30%;
      margin-top: -16rem;
      height:8%;
      margin-left: 25%;
      font-size: 1.2rem;
      padding: 1rem 0;
      box-shadow: -4px 5px 8px #00000048;
      
    }
    @media(min-width:1024px){
      width:15%;
      margin-left: 10%;
      margin-top: -15rem;
      font-size: 1.2rem;
      padding-bottom: 2rem;
      
    }
  }


`;