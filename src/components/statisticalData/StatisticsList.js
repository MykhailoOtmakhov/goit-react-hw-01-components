import Statistics from './Statistics';
import PropTypes from 'prop-types';


function StatisticsList ({ items }){
return(
<ul class="stat-list">Upload stats
    {items.map(item => (
        <li key={item.id}>
            <Statistics       
                title={item.label} 
                stats={item.percentage} 
            />
        </li>
    ))}
</ul>
)
}

StatisticsList.propTypes = {
    id: PropTypes.string.isRequired,
}

export default StatisticsList;
