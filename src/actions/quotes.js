// TODO: Create action creators as defined in tests
//  addQuote(quote: {})
export function addQuote(quote) {
  return { type: 'ADD_QUOTE', quote };
}
// quote: quote

// removeQuote(quoteId: Integer)
export function removeQuote(quoteId) {
  return { type: 'REMOVE_QUOTE', quoteId };
}
// quoteId: quoteId

export function upvoteQuote(quoteId) {
  return { type: 'UPVOTE_QUOTE', quoteId };
}

export function downvoteQuote(quoteId) {
  return { type: 'DOWNVOTE_QUOTE', quoteId };
}

// prefer wrapping our actions in a function, because oftentimes our actions have some parts that will need to change, and a function comes in handy instead of this:
// const increaseCount = { type: 'INCREASE_COUNT' }
