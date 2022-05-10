import React from 'react';
import styled from 'styled-components';

import styles from './styles/btnModal.module.css';

export const ModalRight = ({children, state, changeState}:any) => {
  return (
    <>
    {state && 
      <Overlay>
        <ContainerModal>
          <HeaderModal>
            
            <a className={styles.btnModal} style={{background:'#A3CCEA'}}  href="https://www.paypal.com/donate/?hosted_button_id=LWBCWMZ5LBWU6&source=qr">Enlace Directo</a>
            <a className={styles.btnModal} style={{background:'#A3CCEA'}}  href="https://www.facebook.com/mario.cortezcortes/">Zelle</a>

            <button className={styles.btnModal} style={{ background:'##FF0000'}}  onClick={()=>changeState(false)} >Cerrar</button>
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
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
 

`;

