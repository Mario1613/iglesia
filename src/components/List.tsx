import styles from '../views/ProgramaAmanecer/styles/ProgramaAmanecer.module.css';

import ReactPlayer from 'react-player';


const List = ({data}:any) => {

  const date = data.reverse();
  return (
    <article className={styles.container}>  
 
      {date.map((date:any): JSX.Element=>(
        <div className={styles.video} key={date.id} >
    
          <ReactPlayer url={date.videourl} width="100%" height="100%"  />
        </div>
    
        

      ))}      
    </article>
  )
}

export default List