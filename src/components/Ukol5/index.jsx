import { InputField } from './InputField';
import { useState } from 'react';

/*
Zadání: Vyřešte tento úkol podobně jako předchozí, pouze s tím rozdílem, že tentokrát budete mít
  dvě pole, do kterých uživatel může psát jméno a příjmení. Výsledné jméno a příjmení se mají
  zobrazit pod nadpisem oddělené mezerou. Budete tedy potřebovat dva stavy, každý pro jedno pole.
*/

export const Ukol5 = () => {
  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');
  const handleJmeno = (input) => {
    setJmeno(input)
  }
  const handlePrijmeni = (input) => {
    setPrijmeni(input)
  }
  return (
    <>
      <p>Jméno: {jmeno} {prijmeni}</p>
      <InputField label="Jméno" type="text" onValueChange={handleJmeno}/>
      <InputField label="Příjmení" type="text" onValueChange={handlePrijmeni}/>
    </>
  );
};
