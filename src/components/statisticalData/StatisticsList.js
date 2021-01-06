import Statistics from './Statistics';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './StatisticsList.module.css'


function StatisticsList ({ items }){
return(
    <React.Fragment className={styles.stat}>
<span className={styles.statListTitle}> Upload stats</span>
<ul className={styles.statList}>
    {items.map(item => (
        <li className={styles.statListItem} key={item.id}>
            <Statistics       
                title={item.label} 
                stats={item.percentage} 
            />
        </li>
    ))}
</ul>
</React.Fragment>
)
}

StatisticsList.propTypes = {
    id: PropTypes.string.isRequired,
}

export default StatisticsList;
