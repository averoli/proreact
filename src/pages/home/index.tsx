import React from 'react';
import { navigate } from 'hookrouter';
import Header from '../../components/header';
import Button from '../../components/button';
import Layout from '../../components/layout';

import s from './Home.module.scss';
import Parallax from '../../components/parallax';

import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout>
        <div>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}
          >See pokemons</Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};
export default HomePage;
