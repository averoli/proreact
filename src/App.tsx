import React from 'react';
import {useRoutes} from 'hookrouter';

import routes from "./routes";
import NotFound from "./pages/notfound";
import Header from "./components/header";



const App = () => {
const match = useRoutes(routes)

  return match ? (
<>
  <Header />
  {match}
  </>
  ) : <NotFound />
};

export default App;
