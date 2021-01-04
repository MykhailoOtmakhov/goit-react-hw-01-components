import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import Profile from './components/profile/Profile';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
  // ReactDOM.render(<App />, document.querySelector('#root'));
////////////////////Для єлемента рендер=========

// const Profile =(
// <div class="profile">
//   <div class="description">
//     <img
//       src={user.avatar}
//       alt="Аватар пользователя"
//       class="avatar"
//     />
//     <p class="name">{user.name}</p>
//     <p class="tag">@pmarica @{user.tag}</p>
//     <p class="location">Salvador, Brasil{user.location}</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>
// )

// ReactDOM.render(Profile, document.querySelector('#root'));
// ======================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
