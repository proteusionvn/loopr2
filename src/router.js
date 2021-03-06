import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import pageRoutes from './components/routes';
import Locales from './modules/locales/container'
import Global from './modules/global/container'
function RouterConfig({ history }) {
  return (
      <Locales>
        	<Router history={history}>
          	{pageRoutes}
        	</Router>
      </Locales>
  )
}
export default RouterConfig;
