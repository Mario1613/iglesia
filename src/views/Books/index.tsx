import styles from "./styles/Books.module.css";
import Biblia from "../Books/Book1.png";
import Biblia2 from "../Books/Book2.png";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import MarqueeText from "../../components/MarqueeText";
import { Libros } from '../../interface';

const Books = () => {
	const [libros, setLibros] = useState<Array<Libros>>([]);
	const baseURL = process.env.REACT_APP_API_URL;
	useEffect(() => {
		const consultarAPI = async () => {
			try {
				const url: string = `${baseURL}/libros`;
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();

				setLibros(resultado.reverse());
			} catch (error) {
				console.log('error');
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
							href='https://drive.google.com/file/d/1VoV5S2fGFw2OBAcTiRdUqN7OV3xngLEw/view?usp=sharing'
							title='books'
						>
							<img src={Biblia} width='100%' alt='biblia' />
						</a>
						<a
							href='https://drive.google.com/file/d/1Vo9yROXXgQErRD6dm4KmbeELFSsGwyNF/view?usp=sharing'
							title='books'
						>
							<img src={Biblia2} width='100%' alt='biblia' />
						</a>
						{libros.map(
							(data: Libros): JSX.Element => (
								<div className={styles.cards} key={data.id}>
									<a href={data.enlace} title='Books'>
										<img
											src={data.portadalibros.url}
											alt='Portada'
											width='100%'
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
