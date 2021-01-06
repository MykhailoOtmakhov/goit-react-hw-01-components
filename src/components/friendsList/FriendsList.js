// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem';
import styles from './FriendsList.module.css'
function FriendsList ({friends}){
    return(
        <ul className={styles.friendList}>
            {friends.map(friend => (
            <li className={styles.friendListItem} 
                key={friend.id}>
                <FriendListItem
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                    />
            </li>
        ))}
        </ul>
    )
}

FriendsList.propTypes = {
    id: PropTypes.number,
}

export default FriendsList;