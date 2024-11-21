import { countryInterface } from '@/types_interfaces/types_interfaces';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'World Ranks - Country',
  description: 'World Ranks - Developed by Ibrahim AbdElwahab.',
};

const page = async ({ params }: { params: Promise<{ country: string }> }) => {
  const { country } = await params;
  const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${country}&fields=flags,name,region,area,population,independent,unMember,capital,continents,cca2`);
  const countryData: countryInterface = (await response.json())[0];

  const data: { text: string; value: string }[] = [
    {
      text: 'Population',
      value: `${countryData.population.toLocaleString()}`,
    },
    {
      text: 'Area',
      value: countryData.area.toLocaleString(),
    },
    {
      text: 'Capital',
      value: countryData.capital,
    },
    {
      text: 'Continents',
      value: countryData.continents.join(' - '),
    },
  ];

  return (
    <div className="main-layout">
      <div>
        <img src={countryData.flags.svg} className="w-full h-[200px] object-cover" alt="" />
      </div>
      <div>
        <h2 className="bg-black text-white p-3 font-medium text-xl">
          {countryData.name.common} - {countryData.name.official}
        </h2>
        <div className="grid md:grid-cols-2 gap-1 mt-2">
          {data.map((data, index) => {
            return (
              <h2 key={index} className="bg-accent-color-lighter p-2 rounded ">
                <span className="font-medium">{data.text}: </span>
                <span>{data.value}.</span>
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
