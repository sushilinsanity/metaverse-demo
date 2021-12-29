import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Test from '../components/Test';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden'>
      <Head>
        <title>My Animeverse</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-screen-2xl mx-auto'>
        <Header />
        <Messages />
        {/* <Test /> */}
      </div>

      <button onClick={logout}>Logout</button>

    </div>
  );
}
