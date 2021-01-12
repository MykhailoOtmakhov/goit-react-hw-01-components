import FriendListItem from './FriendsListItem';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css'
function FriendsList ({friends}){
    return(
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />
            ))} 
        </ul>
    )
}
FriendsList.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
    }))
}
FriendsList.defaultProps = {
    friends:{
      avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
      isOnline: false,
    }
}
export default FriendsList;
