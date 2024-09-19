// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const QuoteBox = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-orange-500',
    'bg-green-500',
    'bg-pink-500',
    'bg-black-500',
    'bg-purple-500',
    'bg-yellow-500',
    'bg-gray-500',
  ];

  // Function to fetch a new quote from the API
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'); // New API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
      setQuote({ text: randomQuote.quote, author: randomQuote.author });

      // Randomly select a background color
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.className = randomColor; // Change the body background color
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching quote: ', error);
      setQuote({ text: 'Failed to fetch quote.', author: '' });
    }
  };

  // Fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="bg-white rounded-lg shadow-lg p-20 w-full max-w-lg text-center mx-auto mt-20">
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
