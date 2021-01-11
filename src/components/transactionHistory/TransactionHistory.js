import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'
export default
function TransactionHistory ({items}) {
    return(
        <React.Fragment>
            <table className={styles.transactionHistory}>
                <thead className={styles.title}>
                   <tr>
                     <th >Type</th>
                     <th>Amount</th>
                     <th>Currency</th>
                   </tr>
                 </thead>
                 <tbody>
                    {items.map(item =>  (
                     <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                     </tr>
                     ))
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }),
    ),
}