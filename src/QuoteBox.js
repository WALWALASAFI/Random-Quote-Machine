import React, { useState, useEffect } from 'react';

// eslint-disable-next-line no-console
const QuoteBox = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });

  // Function to fetch a new quote from the API
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error fetching quote: ", error);
      setQuote({ text: 'Failed to fetch quote.', author: '' });
    }
  };

  // Fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="bg-white rounded-lg shadow-lg p-12 w-full max-w-lg text-center mx-auto mt-20">
      <p id="text" className="text-xl mb-2 text-gray-800 font-roman">{quote.text || 'Loading quote...'}</p>
      <p id="author" className="font-bold mb-4">- {quote.author || 'Loading author...'}</p>
      <button
        id="new-quote"
        className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r from-red-300 via-yellow-300 to-green-500"
        onClick={fetchQuote}
      >
        New Quote
      </button>
      <a
        id="tweet-quote"
        className="block mt-4 text-blue-600 hover:underline"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text)} - ${encodeURIComponent(quote.author)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
};

export default QuoteBox;
