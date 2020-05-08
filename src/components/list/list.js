import React from 'react';
import 'list.css';
import Business from '../business/business';

class BusinessList extends React.Component {
  render() {
    return (<div className="BusinessList">
        <Business/>
  </div>);
  }
}
export default BusinessList;