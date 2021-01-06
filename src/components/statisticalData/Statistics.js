import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css'
export default
 function Statistics (props){
const {key, title, stats}=props;
return(
  <React.Fragment key={key}>
      <span className={styles.label}>{title}</span>
      <span className={styles.percentage}>{stats}</span>
    </React.Fragment>
 
)}

Statistics.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  stats: PropTypes.number,
}
