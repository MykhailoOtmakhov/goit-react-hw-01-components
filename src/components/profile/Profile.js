import PropTypes from 'prop-types';
import './src/components/profile/Profile.module.css';

 function Profile (props){
    const {name, tag, location, avatar, stats} = props;
    // console.log(props);
    return (
    <div className="profile">
      <div className="Description" style={{color: 'green'}}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
    
      <ul className="stats" >
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
    )
  }

  Profile.defaultProps = {
    avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"
  
  };  //   stats: PropTypes.arrayOf(
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