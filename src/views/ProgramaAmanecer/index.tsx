import styles from "./styles/ProgramaAmanecer.module.css";
import { useEffect, useState } from "react";
import List from '../../components/VideosSunriseList';
import { VideosYoutube } from '../../interface';

export default function ProgramaAmanecer() {
	const [videos, setVideos] = useState<Array<VideosYoutube>>([]);
	const [isLoading, setIsLoading] = useState<Boolean>(true);

	useEffect(() => {
		const consultarAPI = async () => {
			try {
				const respuesta = await fetch(
					`${process.env.REACT_APP_API_URL}/section-programa-amanecers`
				);
				const resultado = await respuesta.json();

				setIsLoading(false);
				setVideos(resultado);
			} catch (error) {
				console.log(error);
			}
		};
		consultarAPI();
	}, []);
	const isExist = videos.find((video) => video.id);
	if (isLoading) {
		return <h1>Cargando...</h1>;
	}
	return (
		<>
			{(isExist !== undefined || isExist !== null) && (
				<section className={styles.background}>
					<h2 className={styles.titleSecundary}>
						Mí Devocional Amanecer En Cristo
					</h2>
					<article className={styles.container}>
						{videos.map(
							(video, index) =>
								index < 6 && <List video={video} key={video.id} />
						)}
					</article>
				</section>
			)}
		</>
	);
}
