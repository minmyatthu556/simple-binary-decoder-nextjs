import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const [activePage, setActivePage] = useState(router.pathname);

  const handleBiClick = () => setActivePage('/');
  const handleEngClick = () => setActivePage('/EngToBinary');

  return (
    <div className="relative z-10">
      <ul className="flex justify-center items-center mt-2 text-dirty-white">
        <li
          className={`mx-4 text-sm md:text-xl inline-block py-2 ${
            activePage === '/'
              ? 'border-b-2 border-transparent-white'
              : 'text-gray-500'
          }`}
          onClick={handleBiClick}
        >
          <Link href="/">Binary to English</Link>
        </li>
        <li
          className={`mx-4 text-sm md:text-xl inline-block py-2 ${
            activePage === '/EngToBinary'
              ? 'border-b-2 border-transparent-white'
              : 'text-gray-500'
          }`}
          onClick={handleEngClick}
        >
          <Link href="/EngToBinary">English to Binary</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
