export default (state = [], action) => {
  // declare first
  let quote;
  let index;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    // return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter((q) => q.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      return state.map((q) =>
        q.id === action.quoteId ? { ...q, votes: (q.votes += 1) } : q,
      );

    // Solution#2
    // index = state.findIndex((q) => q.id === action.quoteId);
    // quote = state[index];
    // return [
    //   ...state.slice(0, index),
    //   Object.assign({}, quote, { votes: (quote.votes += 1) }),
    //   ...state.slice(index + 1),
    // ];

    // Solution#3
    // if (quote.id === action.quoteId) {
    //   return { ...quote, votes: (quote.votes += 1) };
    // } else {
    //   return quote;
    // }

    case 'DOWNVOTE_QUOTE':
      return state.map((q) => {
        return q.id === action.quoteId && q.votes > 0
          ? { ...q, votes: (q.votes -= 1) }
          : q;
      });

    // Solution # 2
    // index = state.findIndex((q) => q.id === action.quoteId);
    // quote = state[index];
    // if (quote.votes > 0) {
    //   return [
    //     ...state.slice(0, index),
    //     Object.assign({}, quote, { votes: (quote.votes -= 1) }),
    //     ...state.slice(index + 1),
    //   ];
    // }

    // Solution # 3
    // quote = state.find((q) => q.id === action.quoteId);
    // index = state.indexOf(quote);
    // if (quote.votes === 0) {
    //   return [...state];
    // }
    // return [
    //   ...state.slice(0, index),
    //   { ...quote, votes: quote.votes - 1 },
    //   ...state.slice(index + 1),
    // ];

    default:
      return state;
  }
};
