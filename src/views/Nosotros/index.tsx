import React, { useEffect} from 'react';
import styled from 'styled-components';
import styles from './styles/Nosotros.module.css';


const Nosotros = ()=>{

  const [dates, setDates] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
    
  useEffect(()=>{
      const consultarAPI = async ()=>{
        try{
          const url:string = 'https://dolphin-app-rn85f.ondigitalocean.app/section-nosotros';
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setDates(resultado);
          setIsLoading(false);
        }catch(error){
          console.log('error')
        }
      }
    consultarAPI();
  },[]);
 

    
  if(isLoading){
    return <h1>Cargando...</h1>
  }
 
   const {imgnosotros, tnosotros, pnosotros, pnosotros2, tmision, pmision, tvision, pvision } = dates[0]; 
  const {url} = imgnosotros;

  return (
    <section id='nosotros'>
        <div className={styles.background}>
            <div className={styles.container}>
            

                
                <Centrador>
                <video className={styles.pixelImg} controls >
                    <source src={url}  type="video/mp4" />
                </video>    <div className={styles.sectionText}>
                          <h2>{tnosotros}</h2>
                        <p>{pnosotros}</p>
                        <p>{pnosotros2}</p>                        
                        <h2>{tmision}</h2>
                        <p>{pmision}</p>
                        <h2>{tvision}</h2>
                        <p>{pvision}</p>
                    </div> 
                </Centrador>
              
            </div>
        </div>
    </section>
  )
}
export default Nosotros;

const Centrador = styled.div`
      @media (min-width:992px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-self: center;
          align-content: center;
          gap: 3rem;
          height: 760px;
        }
        
    
    `;