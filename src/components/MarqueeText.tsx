import  { useEffect, useState } from 'react';

const MarqueeText = () =>{

    const [datas, setData] = useState([]);

    useEffect(()=>{
        const consultarAPI = async () =>{
            try{
            const url:string = 'https://dolphin-app-rn85f.ondigitalocean.app/textodelasemanas';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json()
            // console.log(resultado[0]);
                setData(resultado);
              }catch(error){
                console.log('error') ;
              }
            }
            consultarAPI();
    },[]);
    const datasNormalize:Object[] = datas.reverse();

    return(
        <div>
        { datasNormalize.map((data:any): JSX.Element =>(
            <h3 key={data.id} >{data.textodelasemana}</h3>
        )
        
        )
        
        }

        </div>
    )

}
export default MarqueeText;