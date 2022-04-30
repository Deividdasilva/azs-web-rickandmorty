import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link className='logo' to='/'>Episódios</Link>
      <Link className='favoritos' to='/favoritos'>Favoritos</Link>
      <Link className='vistos' to='/vistos'>Vistos</Link>
    </header>
  );
}