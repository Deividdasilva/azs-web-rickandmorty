import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function Episodio() {
  const { id } = useParams();
  // const navigate = useNavigate();

  const [episodio, setEpisodio] = useState([]);
  const [details, setDetails] = useState([]);

  // useEffect(()=> {
  //   async function loadEpisodio() {
  //     const response = await api.get(`/episode/${id}`);
  //     console.log('1', response);
  //     setEpisodio(response.data);
  //   }
  //   loadEpisodio();
  // }, [id]);
  
  useEffect(()=> {
    async function loadDetails() {
      const response = await api.get(`/character/${id}`);
      console.log('2', {
        characters: response.data.image,
      });
      setDetails(response.data);
    }
    loadDetails();
  }, [id]);

  return (
    <div className='episodio-loading'>
      {/* {details.data.map((episodio)=>{
          return(
            <article key={episodio.id}>
               <strong>: {episodio.name}</strong><br />
               
            </article>
          );
        })} */}
      {/* <article key={episodio.id}>
        <strong>Número do episódio: {episodio.episode}</strong><br />
        <strong>Nome: {episodio.name}</strong><br />
        <strong>Data em que foi ao ar: {episodio.air_date}</strong><br />
        <img src={details} alt='' />
      </article> */}
     
    </div>
  );
}