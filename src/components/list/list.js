import React from 'react';
import './list.css';
import Business from '../business/business';

class BusinessList extends React.Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
  }

  display(business, index) {
    return <Business business={business} key={index} />;
  }

  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((e, i) => this.display(e, i))}
      </div>
    );
  }
}
export default BusinessList;
