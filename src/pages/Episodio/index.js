import { useEffect, useState } from 'react';

import './Episodio.css';
import { toast } from 'react-toastify';

import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';


export default function Episodio() {
  const { id } = useParams();
  // const navigate = useNavigate();

  const [episodio, setEpisodio] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(()=> {
    async function loadEpisodio() {
      const response = await api.get(`/episode/${id}`);
      window.location.search.substr(1).split('/', 6);

      // const details = response.data.characters;

      // const details = response.data.characters[0].split('/', 6);
      console.log('details', details);
      
      // console.log('response.data.characters', response.data.characters[0].split('/', 6));
      // console.log('response.data', response.data[0]);

      setEpisodio(response.data);
      setDetails(response.data.characters);
    }
    loadEpisodio();
  }, [details, id]);
  
  // useEffect(()=> {
  //   async function loadDetails() {
  //     const response = await api.get(`/character/${id}`);
  //     // console.log('2', response.data.characters);
  //     setDetails(response.data.characters);
  //   }
  //   loadDetails();
  // }, [id]);

  function favoritarEpisodio(){
    const minhaLista = localStorage.getItem('episodio');

    let episodiosFavoritos = JSON.parse(minhaLista) || [];

    const hasEpisodio = episodiosFavoritos.some((episodioFavorito)=> episodioFavorito.id === episodio.id);

    if(hasEpisodio) {
      toast.info('Esse Episodio ja está como Favorito');
      return;
    }

    episodiosFavoritos.push(episodio);
    localStorage.setItem('episodio', JSON.stringify(episodiosFavoritos));
    toast.success('Salvo com sucesso');
  }

  function episodioVisto(){
    const minhaLista = localStorage.getItem('visto');

    let episodiosVistos = JSON.parse(minhaLista) || [];

    const hasEpisodio = episodiosVistos.some((episodioFavorito)=> episodioFavorito.id === episodio.id);

    if(hasEpisodio) {
      toast.info('Esse Episodio ja está como Visto');
      return;
    }

    episodiosVistos.push(episodio);
    localStorage.setItem('visto', JSON.stringify(episodiosVistos));
    toast.success('Salvo com sucesso');
  }


  return (
    <div className='lista-episodios'>
     <strong>Número do episódio: {episodio.episode}</strong><br />
      <strong>Nome: {episodio.name}</strong><br />
      <strong>Data em que foi ao ar: {episodio.air_date}</strong><br />
      {/* {details.map((ep)=>{
        return(
          <article key={ep.id}>
            <img src={`https://rickandmortyapi.com/api/character/avatar/${ep.name}.jpeg,`} alt='' />
            <strong>Imagem: {ep}</strong><br />
            <strong>Nome: {ep}</strong><br />
            <strong>Especie: {ep}</strong><br />
            <strong>Status: {ep}</strong><br />
          </article>
        );
      })} */}
      <div className='button'>
        <button onClick={favoritarEpisodio}>
          Favorito
        </button>
        <button onClick={episodioVisto}>
          Visto
        </button>
      </div>
    </div>
  );
}

// https://www.youtube.com/watch?v=cX0N3TNxumw