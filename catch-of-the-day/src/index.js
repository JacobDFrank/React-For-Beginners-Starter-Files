import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import Helmet from 'react-helmet';
import './css/style.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import MeetingPicker from './components/MeetingPicker';
import NotFound from './components/NotFound';


import {
  injectGlobalStyle,
  injectResetStyle,
} from 'reactackle';

injectGlobalStyle();
injectResetStyle();


const Root = () => {
  return (
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <BrowserRouter>
      <div>
        <Helmet title="When2Meet2.0" />
        <Match exactly pattern="/" component={MeetingPicker} />
        <Match pattern="/store/:calId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  </ConnectedRouter>
</Provider>
  )
}

render(<Root/>, document.querySelector('#main'));
