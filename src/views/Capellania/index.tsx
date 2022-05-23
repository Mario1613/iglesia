import styles from './style/Capellania.module.css';
import image2 from './img/0002.jpg';
import image3 from './img/0003.jpg';
import image4 from './img/0004.jpg';
import image5 from './img/0005.jpg';
import image6 from './img/0006.jpg';
import image7 from './img/0007.jpg';
import image8 from './img/0008.jpg';
import image9 from './img/0009.jpg';
import image10 from './img/0010.jpg';
import { Link } from 'react-router-dom';

export default function Capellania() {
  return (

    <aside className={styles.background}>
      <div className={styles.image}></div>
      <h2 className={styles.capellania_title}>Capellania</h2>
      <div className={styles.container}>
        <img className={styles.img} src={image2} alt="" />
        <img className={styles.img} src={image3} alt="" />
        <img className={styles.img} src={image4} alt="" />
        <img className={styles.img} src={image5} alt="" />
        <img className={styles.img} src={image6} alt="" />
        <img className={styles.img} src={image7} alt="" />
        <img className={styles.img} src={image8} alt="" />
        <img className={styles.img} src={image9} alt="" />
        <img className={styles.img} src={image10} alt="" />
      </div>
      <div>

      </div>
      <footer>
        <div className={styles.containerFooter}>
          <div className={styles.vertical}>
            <div className={styles.icon}>
             
                <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
                </Link>

             </div>
          </div>
        </div>
      </footer>
    </aside>
  )
}
