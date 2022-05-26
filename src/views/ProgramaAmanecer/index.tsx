import styles from './styles/ProgramaAmanecer.module.css';

import { useEffect} from 'react';
import List from '../../components/List';
import React from 'react';


export default function ProgramaAmanecer() {

  const [data, setData] = React.useState<object>([]);
  const [isLoading, setIsLoading] = React.useState<Boolean>(true);
  useEffect(()=>{
    const consultarAPI = async () =>{
      const url:string = 'https://dolphin-app-rn85f.ondigitalocean.app/section-programa-amanecers';
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setIsLoading(false);
      setData(resultado);
    }
    consultarAPI();
  },[]);
  if(isLoading){
    return <h1>Cargando...</h1>
  }
  

  
  return (
    <section className={styles.background} >
            <h2 className={styles.titleSecundary}>Mí Devocional Amanecer En Cristo</h2>
          <List data ={data}/>
        
    </section>
  )
}
