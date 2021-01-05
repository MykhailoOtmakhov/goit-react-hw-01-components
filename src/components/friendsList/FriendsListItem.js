import React from 'react';
import PropTypes from 'prop-types';
export default
 function FriendsListItem (props){
const {avatar, name, isOnline}=props;
return(
<React.Fragment>
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt={name} width="48" />
  <p class="name">{name}</p>
</React.Fragment>
)
}

FriendsListItem.defaultProps = {
    avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
}
    FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
}