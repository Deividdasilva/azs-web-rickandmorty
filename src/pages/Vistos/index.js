import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './vistos.css';
import { toast } from 'react-toastify';

export default function Favoritos() {
  const [episodios, setEpisodios] = useState([]);

  useEffect(()=>{
    const minhaLista = localStorage.getItem('visto');
    setEpisodios(JSON.parse(minhaLista) || []);
  },[]);

  function handleDelete(id) {
    let minhaLista = episodios.filter((item)=> {
      return (item.id !== id);
    });

    setEpisodios(minhaLista);
    localStorage.setItem('visto', JSON.stringify(minhaLista));

    toast.success('Episodio excluido com sucesso');
  }

  return (
    <div id="visto">
      <h2>Episodios Vistos</h2>

      {episodios.length === 0 && <span>Você não possui episodios vistos</span> }

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