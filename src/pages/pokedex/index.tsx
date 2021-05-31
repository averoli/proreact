import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Heading, { TagEnum } from '../../components/heading';
import config from '../../config';

const usePokemons = () => {
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.url.pathname}`;
        console.log('####:url', url)
        const response = await fetch(url);
        const result = await response.json();

        setData(result);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }
  return (
    <>
      <Layout>
        <Heading tag={TagEnum.h3}>
          {data.total} <b>Pokemons</b> for you to choose your favorite.
        </Heading>
        <div>
          {data.pokemons.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Pokedex;
