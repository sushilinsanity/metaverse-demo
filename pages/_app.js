import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="uX9fwOl6UpooQpjd9IrQi1vzy8QnvQBvXYwrTsDv"
      serverUrl="https://kmyaurhaqwwr.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
