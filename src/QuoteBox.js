import { useState, useEffect } from 'react';
import axios from 'axios';

const colors = [
  '#dce775', '#fce4ec', '#c5e1a5', '#ff6f61', '#000000', '#3f51b5',
  '#4caf50', '#e91e63', '#00bcd4', '#8d6e63', '#f7f1e1', '#e0f7fa',
  '#f0f4c3',
];

function QuoteBox() {
  const [quote, setQuote] = useState({ text: 'Loading...', author: 'Loading...' });

  // Fetches a new quote from the API and updates the state
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote({
        text: response.data.content,
        author: response.data.author,
      });

      // Pick a random background color for the body
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    } catch (error) {
      // Handle error fetching the quote
      // eslint-disable-next-line no-console
      console.error('Error fetching the quote:', error);
    }
  };

  // Fetch a quote on component mount
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="bg-white rounded-lg shadow-lg p-12 w-full max-w-lg text-center mx-auto mt-20">
      <p id="text" className="text-xl mb-2 text-gray-800 font-roman">{quote.text}</p>
      <p id="author" className="font-bold mb-4">- {quote.author}</p>
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
}

export default QuoteBox;
