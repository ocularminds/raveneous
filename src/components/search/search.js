import React from 'react';
import './search.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Higest Rated': 'rating',
  'Most Reviewed': 'review_count',
};
const HASH = "#";
class SearchBar extends React.Component {
  renderSortByOptions() {
    Object.keys(sortByOptions).map((o, index) => {
      return <li key={index}>{sortByOptions[o]}</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href={HASH}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
