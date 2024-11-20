import { ReactNode } from 'react';

const CountriesTableTr = ({ children }: { children: ReactNode }) => {
  return <tr className="font-medium border-b [&_td:first-child_a]:justify-center even:bg-accent-color-lighter hover:bg-[#eeeeee9e]">{children}</tr>;
};

export default CountriesTableTr;
