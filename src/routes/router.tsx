import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { Person } from '../pages/person';
import Cookies from 'js-cookie';
import { Header } from '../components/header';
import { Admin } from '../pages/admin';
import { CadastroProduto } from '../pages/cadastroProduto';
import { ProdutosAdm } from '../pages/amostraPostAdm';
import { Categorias } from '../pages/categorias';
import { CadastrarCategoria } from '../pages/cadastrarCategoria';
import { Produto } from '../pages/produto';

export function AppRouters() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {Cookies.get('id') ? (
              <Route path='/person' element={ <Person /> } />
            ) : (
              <>
                <Route path='/login' element={ <Login /> }/>
                <Route path='/register' element={ <Register/> }/>
              </>
          )}

          {Cookies.get('idAdm') ? (
            <>
              <Route path='/adm' element={ <ProdutosAdm /> } />
              <Route path='/cadastrarProduto' element={ <CadastroProduto /> } />
              <Route path='/cadastrarCategoria' element={ <CadastrarCategoria /> } />
              <Route path='/categorias' element={ <Categorias /> } />
            </>
          ) : (
            <Route path='/adm' element={ <Admin /> } />
          )}
         
          <Route path='/' element={ <Home /> }/>
          <Route path='/produto/:name' element={ <Produto /> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
