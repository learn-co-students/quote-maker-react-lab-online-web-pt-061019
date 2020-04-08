import uuid from "uuid";

export default (state = [], action) => {
  let index;
  let updatedQuote;

  switch (action.type) {
    case "ADD_QUOTE":
      return [
        ...state,
        {
          ...action.quote,
          id: action.quote.id || uuid(),
          votes: action.quote.votes || 0,
        },
      ];

    case "REMOVE_QUOTE":
      index = state.findIndex((quote) => quote.id === action.quoteId);
      return [...state.slice(0, index), ...state.slice(index + 1)];

    case "UPVOTE_QUOTE":
      index = state.findIndex((quote) => quote.id === action.quoteId);
      updatedQuote = { ...state[index], votes: state[index].votes + 1 };
      return [
        ...state.slice(0, index),
        updatedQuote,
        ...state.slice(index + 1),
      ];

    case "DOWNVOTE_QUOTE":
      index = state.findIndex((quote) => quote.id === action.quoteId);
      updatedQuote = {
        ...state[index],
        votes: state[index].votes === 0 ? 0 : state[index].votes - 1,
      };
      return [
        ...state.slice(0, index),
        updatedQuote,
        ...state.slice(index + 1),
      ];

    default:
      return state;
  }
};
