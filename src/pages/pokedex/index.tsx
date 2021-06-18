import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Heading, { TagEnum } from '../../components/heading';

const Pokedex = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false)

  useEffect(() => {
      setIsLoading(true)
    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then((res) => res.json())
      .then((data) => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
      })

      .catch(() => {
          setError(true)
      })
        .finally( () => {
            setIsLoading(false);
        })

  }, []);

  if (isLoading){
      return <div>Loading...</div>
  }

  if (isError){
      return <div>Something wrong!</div>
  }
  return (
    <>
      <Layout>
          <Heading tag={TagEnum.h3} >
        {totalPokemons} <b>Pokemons</b> for you to choose your favorite.
          </Heading>
        <div>
          {pokemons.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>

      </Layout>
    </>
  );
};

export default Pokedex;
