import styles from '../views/ProgramaAmanecer/styles/ProgramaAmanecer.module.css';

import ReactPlayer from 'react-player';


const List = ({data}:any) => {

  const data = data.reverse();

  const data = data.slice(0, 5);


  return (
    <article className={styles.container}>  
      {data.map((date:any): JSX.Element=>(
        <div className={styles.video} key={date.id} >
    
          <ReactPlayer url={date.videourl} width="100%" height="100%"  />
        </div>
    
        

      ))}      
    </article>
  )
}

export default List