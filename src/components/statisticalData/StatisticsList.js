import Statistics from './Statistics';
import React from 'react';
import styles from './StatisticsList.module.css'
import itemsPropTypes from './itemsPropTypes'
function StatisticsList ({ items }){
return(
    <React.Fragment>
        <span className={styles.statListTitle}>
            Upload stats
        </span>
        <ul className={styles.statList}>
            {items.map(item => (
                <Statistics    
                        key={item.id}
                        title={item.label} 
                        stats={item.percentage} 
                />
            ))}
        </ul>
    </React.Fragment>
)
}
StatisticsList.propTypes = itemsPropTypes
export default StatisticsList;

