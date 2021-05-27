import React from 'react';
import { navigate } from 'hookrouter';

import Button from '../../components/button';
import Layout from '../../components/layout';

import s from './Home.module.scss';
import Parallax from '../../components/parallax';

import { LinkEnum } from '../../routes';
import Heading, {TagEnum} from "../../components/heading";

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div>
          <Heading tag={TagEnum.h1} className={s.text}>
              <b>Find</b> all your favorite Pokemon
          </Heading>
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
