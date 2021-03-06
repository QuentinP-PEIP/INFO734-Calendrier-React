import React, {useState} from 'react';
import Header from './components/header';
import Todo from './components/todo';
import List from './components/list';

const initialFormData = Object.freeze({
  title: "",
  ouvert: false,
  id : Math.ceil(Math.random() * 10000)
});



function App() {

  const [formData, updateFormData] = useState(initialFormData);

  const [todos, addTodos] = useState([]);

  if (todos.length < 24){
      addTodos([
      ...todos,
      {title:(todos.length + 1), date: "2022-1-" + (todos.length + 1), image : "img" + (todos.length+1) + ".jpg", ouvert : false, id: Math.ceil(Math.random() * 10000)}
      ]);
  }
  /*
  return (
    <div className="App">
      <Header/>
      <Todo todos={todos} addTodos={addTodos} formData={formData} updateFormData={updateFormData}/>
      <List todos={todos} setTodos={addTodos}/>
    </div>
  );
  */
  return (
    <div className="App">
      <Header/>
      <List todos={todos} setTodos={addTodos}/>
    </div>
  );

  
}



export default App;
