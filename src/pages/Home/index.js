import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './Home.css';


// https://www.youtube.com/watch?v=wzG6ELTfGC0 
export default function Home() {
  const [episodios, setEpisodios] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(()=>{

    async function loadEpisodios() {
      const response = await api.get('/episode');
      // console.log(response.data.results);
      setEpisodios(response.data.results);
    }

    loadEpisodios();

  }, []);

  return (
    <div className='container'>
      {/* <div className='search'>
        <input 
          type="text"
          value={search}
          placeholder='Buscar...'
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {episodios.filter((val)=> {
          if (search === '') {
            return val
          } else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return (
            <div className='name' key={key}>
              <p>{val.name}</p>
            </div>
          );
        })}
      </div> */}
      <div className='lista-episodios'>
        <input 
          type="text"
          value={search}
          placeholder='Buscar...'
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {episodios.filter((val)=> {
            if (search === '') {
              return val
            } else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
              return val
            }
          }).map((episodio)=>{
            return(
              <article key={episodio.id}>
                 <strong>Número do episódio: {episodio.episode}</strong><br />
                <strong>Nome: {episodio.name}</strong><br />
                <strong>Data em que foi ao ar: {episodio.air_date}</strong><br />
                <strong>Quantidade de personagens que participaram: {episodio.characters.length}</strong><br />
                <Link to={`/episodio/${episodio.id}`}>Detalhes</Link>
              </article>
            );
          })}
        {/* {episodios.map((episodio)=>{
          return(
            <article key={episodio.id}>
               <strong>Número do episódio: {episodio.episode}</strong><br />
              <strong>Nome: {episodio.name}</strong><br />
              <strong>Data em que foi ao ar: {episodio.air_date}</strong><br />
              <strong>Quantidade de personagens que participaram: {episodio.characters.length}</strong><br />
              <Link to={`/episodio/${episodio.id}`}>Detalhes</Link>
            </article>
          );
        })} */}
      </div>
    </div>
  );
} 