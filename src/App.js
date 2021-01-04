// import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/Profile';
import user from './user.json';
// import Statistics from './components/statisticalData/Statistics'
import statisticalData from './statistical-data.json'
import StatisticsList from './components/statisticalData/StatisticsList';


function App() {
  return (
    <div>
      
      <Profile 
  name = {user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />

    <StatisticsList items = {statisticalData} />

    </div>
    
  );
}

export default App;
