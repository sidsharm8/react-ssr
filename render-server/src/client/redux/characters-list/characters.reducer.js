const INITIAL_STATE = {
  list: [],
  nextPage: ""
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        list: action.payload
      };
    case "SET_NEXT_PAGE":
      return {
        ...state,
        nextPage: action.payload
      };
    default:
      return state;
  }
}

export default charactersReducer;
