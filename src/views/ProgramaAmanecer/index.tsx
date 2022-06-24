import styles from './styles/ProgramaAmanecer.module.css';

import { useEffect, useState} from 'react';
import List from '../../components/VideosSunriseList';
import React from 'react';


export default function ProgramaAmanecer() {
  interface Videos{
      id:string,
      titlehover: string,
      updatedAt: string,
      videourl: string
  }
  
  const [videos, setVideos] = useState<Array<Videos>>([]);
  
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(()=>{
    const consultarAPI = async () =>{
      const respuesta = await fetch('https://dolphin-app-rn85f.ondigitalocean.app/section-programa-amanecers');
      const resultado = await respuesta.json();
      setIsLoading(false);
      setVideos(resultado);
    }
    consultarAPI();
  },[]);
  
  if(isLoading){
    return <h1>Cargando...</h1>
  }
  return (
    <section className={styles.background} >
            <h2 className={styles.titleSecundary}>Mí Devocional Amanecer En Cristo</h2>
            <article className={styles.container}> 
            {videos.map((video)=>(<List video={video} key={video.id} />))}
          
        </article>
    </section>
  )
}
