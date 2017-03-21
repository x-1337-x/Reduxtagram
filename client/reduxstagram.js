import React from 'react';
import { render }  from 'react-dom';

import css from './styles/style.styl';

//Import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

//Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
  <Router history={ browserHistory }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ PhotoGrid }></IndexRoute>
      <Route path="/view/:postId" component={ Single }></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('root'));