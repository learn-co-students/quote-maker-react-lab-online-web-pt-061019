import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes'

class Quotes extends Component {

  renderQuotes = () => {
    const {upvoteQuote, downvoteQuote, removeQuote, quotes} = this.props;
    return quotes.map(quote => {
      return <QuoteCard 
      key={quote.id}
      upvoteQuote={upvoteQuote}
      downvoteQuote={downvoteQuote}
      removeQuote={removeQuote}
      quote={quote}
      />
    })
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

//add arguments to connect as needed
export default connect(mapStateToProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
