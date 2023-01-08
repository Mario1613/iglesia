import styles from "./styles/Books.module.css";
import Biblia from "../Books/Book1.png";
import Biblia2 from "../Books/Book2.png";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import MarqueeText from "../../components/MarqueeText";

const Books = () => {
  interface Data {
    id: string;
    enlace: string;
    portadalibros: {
      url: string;
    };
  }

  const [datas, setData] = useState<Array<Data>>([]);
  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const url: string =
          "https://dolphin-app-rn85f.ondigitalocean.app/libros";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setData(resultado.reverse());
      } catch (error) {
        console.log("error");
      }
    };
    consultarAPI();
  }, []);
  return (
    <>
      <section>
        <Marquee>
          <MarqueeText />
        </Marquee>
        <div className={styles.background}>
          <h2 className={styles.titleSecundary}>Libros</h2>
          <article className={styles.container}>
            <a
              href="https://drive.google.com/file/d/1VoV5S2fGFw2OBAcTiRdUqN7OV3xngLEw/view?usp=sharing"
              title="books"
            >
              <img src={Biblia} width="100%" alt="biblia" />
            </a>
            <a
              href="https://drive.google.com/file/d/1Vo9yROXXgQErRD6dm4KmbeELFSsGwyNF/view?usp=sharing"
              title="books"
            >
              <img src={Biblia2} width="100%" alt="biblia" />
            </a>
            {datas.map(
              (data: Data): JSX.Element => (
                <div className={styles.cards} key={data.id}>
                  <a href={data.enlace} title="Books">
                    <img
                      src={data.portadalibros.url}
                      alt="Portada"
                      width="100%"
                    />
                  </a>
                </div>
              )
            )}
          </article>
        </div>
      </section>
    </>
  );
};
export default Books;
