import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProfileStatsItem.module.css';
export default
function ProfileStatsItem ({followers, views, likes}){
 return(
    <ul className={styles.stats}>
        <li className={styles.statsItem} >
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsItem} >
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsItem} >
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
    </ul>
 )
}
ProfileStatsItem.defaultProps = {
    stats: PropTypes.shape({
        followers: 0,
        views: 0,
        likes: 0,
    })
};
ProfileStatsItem.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}

