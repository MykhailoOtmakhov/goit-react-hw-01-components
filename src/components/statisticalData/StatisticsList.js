import Statistics from './Statistics'

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

export default StatisticsList;
