import React,{useReducer} from 'react';
import './App.css';

import{
  reducers,
  initialState,
  CLEAR_COMPLETED,
  TOGGLE_ITEM,
  ADD_ITEM,
} 
from './reducers/reducers';
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';

const App = () => {
  const [state, dispatch] = useReducer(reducers,initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleItem = (itemsId) => {
    dispatch({ type: TOGGLE_ITEM, payload: itemsId });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: CLEAR_COMPLETED })
  };


  return (
    <div className="App">
      <TodoForm addItem={addItem} />
      <TodoItems state={state} toggleItem={toggleItem} clearCompleted={clearCompleted}/>  
    </div>
  );
}

export default App;
