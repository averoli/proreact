import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes';
import NotFound from './pages/notfound';
import Header from './components/header';
import req from './utils/request';

const App = () => {
  req().then((data) => console.log('####:data', data));
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
