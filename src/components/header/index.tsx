import { useRef, useState } from 'react';
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
import { AiFillHome, DiReact, FiX, GoThreeBars } from 'react-icons/all'; 

type Categoria = {
  categoria: string
}

export function Header() {
  const [menuLateral, setMenuLateral] = useState(false);

  const { data } = useQuery<Categoria[]>('categoriaHome', async () => {
    const response = await http.get('/categoria');
    return response.data
  })


  return (
    <>
      <HeaderCabecalho>
        <Conteudo>
          <MenuHamburque>
              {menuLateral ? (
                <button>
                  <FiX 
                  fontSize={30}
                  color="#fff" 
                  onClick={() => setMenuLateral(!menuLateral)}
                  />
                </button>
              ) : (
                <button>
                  <GoThreeBars 
                  fontSize={30}
                  color="#fff" 
                  onClick={() => setMenuLateral(!menuLateral)}
                  />
                </button>
              )}
          </MenuHamburque>

          <Logo>
            <Link to="/">
              <DiReact fontSize={50} color='#fff' />
            </Link>
          </Logo>

          <nav>
            {Cookies.get('tokenUser') ? (
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
        <MenuLaterall click={menuLateral}>
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

      
 
    
      
    </>
  );
}