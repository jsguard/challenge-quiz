import types from '../actions/types';

const initialState = {
    isProgress: false
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.QUIZ.START_SUCCESS:
    state.isProgress = true
    return {
        ...state,
        permissions: action.permissions
      };
    default:
      return state;
  }
}

export default quizReducer;
