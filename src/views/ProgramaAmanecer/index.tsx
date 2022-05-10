import styles from './styles/ProgramaAmanecer.module.css';

import { useEffect, useState } from 'react';
import List from '../../components/List';


export default function ProgramaAmanecer() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const consultarAPI = async () =>{
      const url = 'http://localhost:1337/section-programa-amanecers'
      const respuesta = await fetch(url);
      const resultado = await respuesta.json()
      setIsLoading(false)
      setData(resultado)
    }
    consultarAPI();
  },[]);
  if(isLoading){
    return <h1>Cargando...</h1>
  }
  

  
  return (
    <section className={styles.background} >
            <h2 className={styles.titleSecundary}>Programa Amanecer</h2>
          <List data ={data}/>
        
    </section>
  )
}
