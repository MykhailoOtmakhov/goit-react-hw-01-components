import React from 'react';
import styles from './Statistics.module.css';
import itemsPropTypes from './itemsPropTypes'
export default
function Statistics ({id, title, stats}){
  return(
    <li className={styles.statListItem}
        key={id}>
      <span className={styles.label}>{title}</span>
      <span className={styles.percentage}>{stats}</span>
    </li>
  )
}
Statistics.defaultProps={
  stats: 0,
}
Statistics.propTypes = itemsPropTypes
