
import style from './style/ScrollerIMG.module.css';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import React from 'react';
const ScrollerIMG = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = React.useState<Boolean>(true);
  useEffect(()=>{
    const consultarAPI = async () =>{
      const url:string = 'https://dolphin-app-rn85f.ondigitalocean.app/section-carousels';
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setIsLoading(false);
      setData(resultado);
    }
    consultarAPI();
  },[]);
  if(isLoading){
    return <h1>Cargando...</h1>
  }
 
 console.log(data);

  

  
  var settings = {
    dots: true,
    infinite: false,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // console.log(data[0])
  // // const {_id} = data[0];
  // // console.log(_id)
  

  return (
    <aside className={style.backgroundWhite}>
      <div className={style.backgroundGray}>
        <div className={style.container}>
          <div className="container">
            
            <Slider {...settings}>
            
            {data.map((date:any): JSX.Element=>(
              <div key={date._id}>
                
              <img src={date.img.url} alt="img" className={style.ImgSize} />
            </div>
       
      ))}  
              
           
              
            </Slider>
          </div>
        </div>
      </div>
    </aside>
  )
}
export default ScrollerIMG