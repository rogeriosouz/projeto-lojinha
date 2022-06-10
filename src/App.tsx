import { Footer } from './components/foote';
import { AuthProvider } from './contexts/AuthContext';
import { AppRouters } from './routes/router';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <AppRouters />
      <Footer />
      <GlobalStyles/>
    </>
  )
}

export default App
