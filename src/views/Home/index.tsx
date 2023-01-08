import Contacto from "../Contacto";
import Nosotros from "../Nosotros";
import ProgramaAmanecer from "../ProgramaAmanecer";
import ScrollerIMG from "../ScrollerIMG";
import styles from "./styles/Home.module.css";

export default function Inicio() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image} />
        <div className={styles.onda} style={{ overflow: "hidden" }}>
          <svg
            viewBox="0 0 500
                    150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98
                    500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none" }}
            ></path>
          </svg>
        </div>
      </header>
      <Nosotros />
      <ProgramaAmanecer />
      <Contacto />
      <ScrollerIMG />
    </>
  );
}
