import { useEffect, useState } from 'react';

import './Episodio.css';
import { toast } from 'react-toastify';

import { useParams } from 'react-router-dom';
import api from '../../services/api';

export default function Episodio() {
  const { id } = useParams();

  const [episodio, setEpisodio] = useState([]);

  useEffect(()=> {
    async function loadEpisodio() {
      const response = await api.get(`/episode/${id}`);

      setEpisodio(response.data);
    }
    loadEpisodio();
  }, [id]);

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
