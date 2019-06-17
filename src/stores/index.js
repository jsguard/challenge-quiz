import {
  applyMiddleware,
  createStore,
  combineReducers
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import reducers from '../reducers';

const history = createBrowserHistory({});
history.listen((location, action) => {
  if (action === 'PUSH') {
    window.scrollTo(0,0);
  }
});

const reduxRouterMiddleware = routerMiddleware(history);
const enhancers = composeWithDevTools(
  applyMiddleware(reduxRouterMiddleware),
  applyMiddleware(thunk)
);
const store = createStore(
  reducers(history),
  enhancers
);


export default store;
export {
  history
};
