import React from 'react';
import Item from './Item';

const TodoItems = props =>{
    return(
        <div>
            {props.state.todo.map(item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button onClick={props.clearCompleted}> Clear Todo </button>
        </div>
    )
}
export default TodoItems;