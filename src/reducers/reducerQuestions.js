import { REQUEST_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questions: [],
};

const reducerQuestions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_QUESTIONS:
    return { ...state, questions: action.questions };
  default:
    return state;
  }
};

export default reducerQuestions;