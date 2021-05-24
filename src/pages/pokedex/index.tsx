import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Heading from '../../components/heading';

const Pokedex = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);

  useEffect(() => {
    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then((res) => res.json())
      .then((data) => {
        setTotalPokemons(data.total)
      });
  }, []);

  return (
    <>
      <Layout>
        <Heading>
          {totalPokemons} <b>Pokemons</b> for you to choose your favorite.
        </Heading>
      </Layout>
    </>
  );
};

export default Pokedex;
