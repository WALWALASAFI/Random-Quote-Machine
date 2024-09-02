import React from 'react';
import QuoteBox from './QuoteBox'; // Ensure the path is correct

function App() {
  // Use React and QuoteBox to avoid no-unused-vars errors
  console.log(React.version, QuoteBox); // Temporary usage to avoid eslint error

  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
