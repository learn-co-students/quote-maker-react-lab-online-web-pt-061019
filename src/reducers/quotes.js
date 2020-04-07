export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {

    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      quote = state.slice();
      index = quote.findIndex(quote => quote.id === action.quoteId);

      quote[index].votes += 1
      return quote

    case "DOWNVOTE_QUOTE":
      quote = state.slice();
      index = quote.findIndex(quote => quote.id === action.quoteId);

      if (quote[index].votes !== 0) {
        quote[index].votes -= 1
      }
      return quote

    default:
      return state;
  }
}
