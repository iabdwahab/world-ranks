import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="py-4 border-b">
      <div className="container">
        <h1 className="font-bold text-2xl flex justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
