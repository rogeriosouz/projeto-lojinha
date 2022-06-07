import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import {
  HeaderCabecalho,
  Conteudo,
  LinkLogin,
  MenuHamburque,
  Logo,
} from './style';

import { MenuLaterall } from '../menuLateral/style';
import { useQuery } from 'react-query';
import http from '../../services/axios';
import { LinkMenuLateral } from '../linkMenuLateral';
import { DiCreativecommons } from "react-icons/di";
import { AiOutlineMenuUnfold, AiOutlineMenuFold, AiFillHome } from 'react-icons/all' 

type Categoria = {
  categoria: string
}

export function Header() {
  const [menuLatera, setMenuLateral] = useState(false);

  const { data } = useQuery<Categoria[]>('categoriaHome', async () => {
    const response = await http.get('/categoria');
    return response.data
  })

  return (
    <>
      <HeaderCabecalho>
        <Conteudo>
          <MenuHamburque>
              {menuLatera ? (
                <button>
                  <AiOutlineMenuFold 
                  fontSize={40}
                  color="#fff" 
                  onClick={() => setMenuLateral(!menuLatera)}
                  />
                </button>
              ) : (
                <button>
                  <AiOutlineMenuUnfold 
                  fontSize={40}
                  color="#fff" 
                  onClick={() => setMenuLateral(!menuLatera)}
                  />
                </button>
              )}
          </MenuHamburque>

          <Logo>
            <Link to="/">
              <DiCreativecommons fontSize={50} color='#fff'/>
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
            text={(
              <AiFillHome />
            )}
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