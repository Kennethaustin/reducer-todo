import React from 'react';

 const item = props => {
 console.log(props.item.id);
    return (
        <div 
        className= {props.item.completed ? 'complete': ''}>
            <p onClick={()=> props.toggleItem(props.item.id)}>{props.item.item}</p>
            <p>{props.item.completed ? 'true': 'false'}</p>
        </div>
    )
}

 export default item; 