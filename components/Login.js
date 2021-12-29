import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className='bg-black relative'>
      <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
        <Image
          className='object-cover rounded-full'
          src='https://images.gr-assets.com/hostedimages/1609209191ra/30602819.gif'
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className='bg-yellow-500 rounded-lg p-5 font-bold'
        >
          Login to the ANIMEVERSE
        </button>
      </div>
      <div className='w-full h-screen'>
        <Image
          src='https://wallpaperaccess.com/full/791680.jpg'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}

export default Login;
