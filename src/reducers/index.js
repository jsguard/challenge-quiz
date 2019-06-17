import {
    combineReducers
  } from 'redux';
  import { connectRouter } from 'connected-react-router';
  import quizReducer from './quizReducer';
  
  export default (history) => combineReducers({
    router: connectRouter(history),
    quizReducer,
  })