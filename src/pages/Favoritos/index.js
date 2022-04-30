import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Favorito.css';
import { toast } from 'react-toastify';

export default function Favoritos() {
  const [episodios, setEpisodios] = useState([]);

  useEffect(()=>{
    const minhaLista = localStorage.getItem('episodio');
    setEpisodios(JSON.parse(minhaLista) || []);
  },[]);

  function handleDelete(id) {
    let minhaLista = episodios.filter((item)=> {
      return (item.id !== id);
    });

    setEpisodios(minhaLista);
    localStorage.setItem('episodio', JSON.stringify(minhaLista));

    toast.success('Episodio excluido com sucesso');
  }

  return (
    <div id="favoritos">
      <h2>Episodios Favoritos</h2>

      {episodios.length === 0 && <span>Você não possui episodios favoritos</span> }

      <ul>
        {episodios.map((item)=>{
          return(
            <li key={item.id}>
              <span>{item.name}</span>

              <div>
                <Link to={`/episodio/${item.id}`}>Detalhes</Link>
                <button onClick={() =>handleDelete(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}