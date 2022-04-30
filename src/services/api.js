import axios from 'axios';

// Base URL
// https://rickandmortyapi.com/api

// Todos episodios
// https://rickandmortyapi.com/api/episode

// Episodio 1
// https://rickandmortyapi.com/api/episode/1

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

export default api;