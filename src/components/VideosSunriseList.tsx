import styles from '../views/ProgramaAmanecer/styles/ProgramaAmanecer.module.css';
import ReactPlayer from 'react-player';
interface Video {
  video:{
    videourl: string;
  }
}
const List = ({video}:Video) => {
  return (
        <div className={styles.video} >
          <ReactPlayer url={video.videourl} width="100%" height="100%"  />
        </div>   
  )
}
export default List