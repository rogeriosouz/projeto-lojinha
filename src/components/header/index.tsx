import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import imgHamMenu from '../../styles/img/hamburger_button_menu_icon2.png';

import {
  HeaderCabecalho,
  Conteudo,
  LinkLogin,
  MenuHamburque,
  Logo,
} from './style';

import { MenuLaterall } from '../menuLateral/style';
import { useQuery } from 'react-query';
import axios from '../../services/axios';
import { LinkMenuLateral } from '../linkMenuLateral';

type Categoria = {
  categoria: string
}

export function Header() {
  const [menuLatera, setMenuLateral] = useState(false);

  const { data } = useQuery<Categoria[]>('categoriaHome', async () => {
    const response = await axios.get('/categoria');
    return response.data
  })

  return (
    <>
      <HeaderCabecalho>
        <Conteudo>
          <MenuHamburque>
              <img src={imgHamMenu} alt="hamimg" onClick={() => setMenuLateral(!menuLatera)} />
          </MenuHamburque>

          <Logo>
            <Link to="/">
              <h2>LOGO</h2>
            </Link>
          </Logo>

          <nav>
            {Cookies.get('id') ? (
              <a href="/person">
                <img src="http://source.unsplash.com/random/200x200?r=1" alt="img" />
              </a>
            ) : (
              <LinkLogin>
                <a href="/login">Login</a>
              </LinkLogin>
            )}
          </nav>
        </Conteudo>
      </HeaderCabecalho>
      {menuLatera && (
        <MenuLaterall>
          <LinkMenuLateral 
            click={() => setMenuLateral(false)} 
            to='/' 
            text={'Home'}
          />
          {data?.map(cate => (
            <LinkMenuLateral 
              click={() => setMenuLateral(false)} 
              key={cate.categoria} to={`/produtoPesquisa/:${cate.categoria}`} 
              text={cate.categoria} 
            />
          ))}
        </MenuLaterall>
      )}
      
    </>
  );
}