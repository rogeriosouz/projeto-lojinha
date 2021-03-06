import {
  BrowserRouter,
  Routes,
  Route,
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
import { ProdutosPesquisa } from '../pages/produtoPesquisa';

import { AuthProvider } from '../contexts/AuthContext';
import { EditProduto } from '../pages/editProduto';
import { EditCategoria } from '../pages/editCategoria';

export function AppRouters() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            {Cookies.get('tokenUser') ? (
                <Route path='/person' element={ <Person /> } />
              ) : (
                <>
                  <Route path='/login' element={ <Login /> }/>
                  <Route path='/register' element={ <Register/> }/>
                </>
            )}

            {Cookies.get('tokenAdm') ? (
              <>
                <Route path='/adm' element={ <ProdutosAdm /> } />
                <Route path='/cadastrarProduto' element={ <CadastroProduto /> } />
                <Route path='/cadastrarCategoria' element={ <CadastrarCategoria /> } />
                <Route path='/categorias' element={ <Categorias /> } />
                <Route path='/categorias/:_id/:categoria' element={ <EditCategoria /> } />
                <Route path='/produtoEdit/:nameUP/:prace/:descricao/:_id' element={ <EditProduto /> } />
                <Route path='/produtoDelete' element={ <EditProduto /> } />
              </>
            ) : (
              <Route path='/adm' element={ <Admin /> } />
            )}
          
            <Route path='/' element={ <Home /> }/>
            <Route path='/produtoPesquisa/:categoria' element={ <ProdutosPesquisa /> }/>
            <Route path='/produto/:name' element={ <Produto /> }/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
