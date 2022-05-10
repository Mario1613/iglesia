import styles from '../views/ProgramaAmanecer/styles/ProgramaAmanecer.module.css';
const List = ({data}:any) => {

  return (
    <article className={styles.container}>  
      {data.map((date:any): JSX.Element=>(
        <video className={styles.video} key={date.imggaleria.id} controls>
          <source  src={date.imggaleria.url}  type="video/mp4" />
        </video>
    
        

      ))}      
    </article>
  )
}

export default List