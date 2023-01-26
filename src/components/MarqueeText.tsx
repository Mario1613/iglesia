import { useEffect, useState } from 'react';

const MarqueeText = () => {
    const [datas, setData] = useState([]);
      const baseURL = process.env.REACT_APP_API_URL;
      useEffect(() => {
        const consultarAPI = async () => {
          try {
            const url: string = `${baseURL}/textodelasemanas`;
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
        <div>
            {datas.map((data: any): JSX.Element => (
                <h3 key={data.id} >{data.textodelasemana}</h3>
            ))}
        </div>
    )

}
export default MarqueeText;