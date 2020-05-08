import React from 'react';
import './app.css';
import BusinessList from '../list/list';
import SearchBar from '../search/search';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
