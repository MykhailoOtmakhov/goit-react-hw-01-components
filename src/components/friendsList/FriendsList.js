import FriendListItem from './FriendsListItem';
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
export default FriendsList;