// import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem'
function FriendsList ({friends}){
    return(
        <ul class="friend-list">
            {friends.map(friend => (
            <li key={friend.id}>
                <FriendListItem
                    isOnline={friend.status}
                    avatar={friend.avatar}
                    name={friend.name}
                    />
            </li>
        ))}
        </ul>
    )
}

export default FriendsList;