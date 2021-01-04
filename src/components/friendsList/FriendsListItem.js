import React from 'react';
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