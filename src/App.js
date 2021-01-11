import Profile from './components/profile/Profile';
import user from './user.json';
import statisticalData from './statistical-data.json'
import StatisticsList from './components/statisticalData/StatisticsList';
import FriendsList from './components/friendsList/FriendsList';
import friends from './friends.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './transactions.json';
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
    <StatisticsList items = {statisticalData}/>
    <FriendsList friends = {friends}/>
    <TransactionHistory items={transactions}/>
    </div>    
  );
}
export default App;
