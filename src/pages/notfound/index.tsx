import React from 'react';
import { navigate } from 'hookrouter';

import Button from '../../components/button';
import Team from './assets/Team_Rocket_trio_OS 1.png';
import {LinkEnum} from "../../routes";

import s from './NotFound.module.scss';


const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layout}>
          <img src={Team} alt="Team" />

          <div>
              <p>The rocket team has won this time.</p>
          </div>
        <Button onClick={() => navigate(LinkEnum.HOME)}>Return</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
