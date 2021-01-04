import React from 'react';
export default
function TransactionHistory ({items}) {
    return(
    <React.Fragment>
        <table class="transaction-history">
            <thead>
               <tr>
                 <th>Type</th>
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
