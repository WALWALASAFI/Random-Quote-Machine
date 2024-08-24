// src/QuoteBox.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteBox() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote({
        text: response.data.content,
        author: response.data.author
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.text)}" - ${encodeURIComponent(quote.author)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">- {quote.author}</p>
      <button id="new-quote" onClick={fetchQuote}>New Quote</button>
      <a id="tweet-quote" href="#" onClick={tweetQuote}>Tweet</a>
    </div>
  );
}

export default QuoteBox;
