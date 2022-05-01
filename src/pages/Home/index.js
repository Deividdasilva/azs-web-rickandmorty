import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [episodios, setEpisodios] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    async function loadEpisodios() {
      const response = await api.get('/episode');
      setEpisodios(response.data.results);
    }
    loadEpisodios();
  }, []);

  return (
    <div className='container'>
      <div className='lista-episodios'>
        <input 
          type="text"
          value={search}
          placeholder='Buscar...'
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {episodios.filter((val) => {
            if (search === '') {
              return val
            } else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
              return val
            }
          }).map((episodio, id)=>{
            return(
              <article key={id}>
                 <strong>Número do episódio: {episodio.episode}</strong><br />
                <strong>Nome: {episodio.name}</strong><br />
                <strong>Data em que foi ao ar: {episodio.air_date}</strong><br />
                <strong>Quantidade de personagens que participaram: {episodio.characters.length}</strong><br />
                <Link to={`/episodio/${episodio.id}`}>Detalhes</Link>
              </article>
            );
          })}
      </div>
    </div>
  );
} 