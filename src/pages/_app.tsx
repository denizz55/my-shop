import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from '../contexts/CartContext';
import Navbar from '../components/Navbar';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
