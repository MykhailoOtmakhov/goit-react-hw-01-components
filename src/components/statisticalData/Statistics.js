import React from 'react';
export default
 function Statistics (props){
const {key, title, stats}=props;
return(
  <React.Fragment key={key}>
    {/* // <li class="item" >{key} */}
      <span class="label">{title}</span>
      <span class="percentage">{stats}</span>
    {/* // </li> */}
    </React.Fragment>
 
)}
