import styles from '../views/ProgramaAmanecer/styles/ProgramaAmanecer.module.css';

import ReactPlayer from 'react-player';


interface Props {
  data: any;
}




const List = ({data}:Props) => {
  
 
  const dataNormalize = data.reverse();

  return (
    <article className={styles.container}>  
      {dataNormalize.map((date:any): JSX.Element=>(
        <div className={styles.video} key={date.id} >
    
          <ReactPlayer url={date.videourl} width="100%" height="100%"  />
        </div>
    
        

      ))}      
    </article>
  )
}

export default List