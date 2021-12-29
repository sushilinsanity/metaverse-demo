import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
  const { setUserData, isUserUpdating, userError, user, logout } = useMoralis();

  const setUsername = (e) => {
    e.preventDefault();
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({ username });
  };

  return (
    <div className='sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700'>
      <div className='flex p-6 font-mono'>
        <div className='flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-pink-400'>
          <Image
            className='absolute z-10 inset-0 w-full h-full object-cover rounded-lg bg-black'
            src={`https://avatars.dicebear.com/api/pixel-art/${user.get('username')}.svg`}
            layout='fill'
            onClick={() => logout()}
          />
        </div>
        <form className='flex-auto pl-6'>
          <div className='relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6'>
            <h1 className='relative w-full flex-none mb-2 text-2xl font-semibold text-white'>
              Welcome to the Animeverse
            </h1>
            <div className='relative text-lg text-white'>{user.get('username')}</div>
          </div>
          <div className='flex space-x-2 mb-4 text-sm font-medium'>
            <div className='flex space-x-4'>
              <button
                className='px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-pink-400 text-black'
                disabled={isUserUpdating}
                onClick={(e) => setUsername(e)}
              >
                Change Username
              </button>
              <button
                className='px-6 h-12 uppercase font-semibold tracking-wider border border-gray-200 text-white'
                type='button'
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          </div>
          <p className='text-xs leading-6 text-gray-500'>
            Powered by Moralis.io
          </p>
        </form>
      </div>

      {/* <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
        <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
          <Image
            layout='fill'
            objectFit='cover'
            className='rounded-full object-cover'
            // src='https://links.papareact.com/3pi'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAk1n35uNWC-1GCcOGauqQkUHelYU_7AoiFg&usqp=CAU'
          />
        </div>

        <div className='col-span-4 text-left lg:text-center'>
          <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'><Avatar logoutOnPress /></div>

          <h1 className='text-3xl'>Welcome to the ANIMEVERSE</h1>

          <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div> */}
    </div>
  );
}

export default Header;
