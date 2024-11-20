import Link from 'next/link';
import { ReactNode } from 'react';

const CountriesTableTdLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href} className="px-3 py-2 text-start  flex items-center h-full w-full">
      {children}
    </Link>
  );
};

export default CountriesTableTdLink;
