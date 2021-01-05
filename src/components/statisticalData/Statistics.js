import PropTypes from 'prop-types';
import React from 'react';
export default
 function Statistics (props){
const {key, title, stats}=props;
return(
  <React.Fragment key={key}>
      <span class="label">{title}</span>
      <span class="percentage">{stats}</span>
    </React.Fragment>
 
)}

Statistics.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  stats: PropTypes.number,
}
