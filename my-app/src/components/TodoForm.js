import React, {useState} from 'react';

const TodoForm = (props) => {
    const[state,setState] = useState({
        item:''
    });
    const handleChanges = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    };
    const submitItem = e => {
        e.preventDefault();
        props.addItem(e, state.item);
        setState({item:''});
    };
    return (<form onSubmit={submitItem}>
        <input
            type="text"
            value={state.item}
            name='item'
            onChange={handleChanges}
        />
        <button>Add</button>
    </form>
    );
}
export default TodoForm;