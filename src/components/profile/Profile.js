import PropTypes from 'prop-types';
import styles from './Profile.module.css';

 function Profile (props){
    const {name, tag, location, avatar, stats} = props;
    return (
      <div className={styles.profile}>
          <div className={styles.description}>
            <img
              src={avatar}
              alt="Аватар пользователя"
              className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.location}>{location}</p>
          </div>
    
          <ul className={styles.stats} >
            <li className={styles.statsItem} >
              <span className={styles.label}>Followers</span>
              <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li className={styles.statsItem} >
              <span className={styles.label}>Views</span>
              <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li className={styles.statsItem} >
              <span className={styles.label}>Likes</span>
              <span className={styles.quantity}>{stats.likes}</span>
            </li>
          </ul>
      </div>
    )
  }

  Profile.defaultProps = {
    avatar: "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"
  };  
  //   stats: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       followers: 0,
  //       views: 0,
  //       likes: 0,
  //   }))  
  // };

  Profile.propTypes = {
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string,
      avatar: PropTypes.string,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          followers: PropTypes.number,
          views: PropTypes.number,
          likes: PropTypes.number,
      }))
  }


  export default Profile;