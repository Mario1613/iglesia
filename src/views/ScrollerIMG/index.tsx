import style from "./style/ScrollerIMG.module.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { ImagenesScroll } from '../../interface';

const ScrollerIMG = () => {
	const [imagenes, setImagenes] = useState<Array<ImagenesScroll>>([]);
	const [isLoading, setIsLoading] = useState<Boolean>(true);
	const baseURL = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const consultarAPI = async () => {
			try {
				const url: string = `${baseURL}/section-carousels`;
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();

				setIsLoading(false);
				setImagenes(resultado);
			} catch (error) {
				console.log(error);
			}
		};
		consultarAPI();
	}, []);
	if (isLoading) {
		return <h1>Cargando...</h1>;
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<aside className={style.backgroundWhite}>
			<div className={style.backgroundGray}>
				<div className={style.container}>
					<div className='container'>
						<Slider {...settings}>
							{imagenes.map(
								(date: ImagenesScroll): JSX.Element => (
									<div key={date._id}>
										<img
											src={date.img.url}
											alt='img'
											className={style.ImgSize}
										/>
									</div>
								)
							)}
						</Slider>
					</div>
				</div>
			</div>
		</aside>
	);
};
export default ScrollerIMG;
