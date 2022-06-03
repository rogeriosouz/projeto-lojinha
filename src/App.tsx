import { Footer } from './components/foote';
import { AppRouters } from './routes/router';
import GlobalStyles from './styles/GlobalStyles';
import { 
  QueryClient,
  QueryClientProvider,
} from 'react-query';

function App() {
  const client = new QueryClient();
  
  return (
    <>
      <QueryClientProvider client={client}>
        <AppRouters />
        <Footer />
        <GlobalStyles/>
      </QueryClientProvider>
    </>
  )
}

export default App
