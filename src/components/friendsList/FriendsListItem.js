import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css'
export default
 function FriendsListItem ({id, avatar, name, isOnline}){
return(
  <li className={styles.friendListItem} 
      key={id}>
    <span className={styles.status}>
      {isOnline ? "+" : "-"}
    </span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
) 
}
FriendsListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
}
FriendsListItem.defaultProps = {
  avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  isOnline: false,
}