export interface Libros {
	id: string;
	enlace: string;
	portadalibros: {
		url: string;
	};
}
export interface Video {
	video?: {
		videourl?: string;
	};
}
export interface InformacionContacto {
	imgcontact: {
		url: string;
	};
	tcontact: string;
	tsubcontact: string;
	pcontact: string;
	tsubcontact2: string;
	pcontact2: string;
	pcontact3: string;
	pcontact4: string;
}
export interface InfoNosotros {
	imgnosotros: {
		url: string;
	};
	tnosotros: string;
	pnosotros: string;
	pnosotros2: string;
	tmision: string;
	pmision: string;
	tvision: string;
	pvision: string;
}
export interface VideosYoutube {
	id: string;
	titlehover: string;
	updatedAt: string;
	videourl: string;
}
export interface ImagenesScroll {
	_id: string;
	img: {
		url: string;
	};
}
