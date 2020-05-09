import React from 'react';
import './search.css';

const HASH = '#';
function SortOption(props) {
  const sortByOptions = props.options;
  return (
    <ul>
      {Object.keys(sortByOptions).map((o, index) => {
        let option = sortByOptions[o];
        return (
          <li
            key={index}
            className={props.sortByClass(option)}
            onClick={(e) => props.sortByChange(option)}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: '', location: '', sortBy: 'best_match'};
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Higest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
    this.getSortByClass = this.getSortByClass.bind(this);
    this.handleSortByChange = this.handleSortByChange(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }
   
  componentDidMount(){
      //
  }

  getSortByClass(option) {
    return this.state.sortBy === option ? 'active' : '';
  }

  handleSortByChange(option) {
    this.setState({sortBy: option});
  }

  handleTermChange(event) {
    event.preventDefault();
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    event.preventDefault();
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    const {term, location, sortBy} = this.state;
    this.props.searchYelp(term, location, sortBy);
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <SortOption
            options={this.sortByOptions}
            sortByChange={this.handleSortByChange}
            sortByClass={()=> this.getSortByClass}
          />
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={(e) => this.handleTermChange}
          />
          <input
            placeholder="Where?"
            onChange={(e) => this.handleLocationChange}
          />
        </div>
        <div className="SearchBar-submit">
          <a href={HASH}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
