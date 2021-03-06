import React from 'react';
import '../style/todo.css';


function Todo({todos, addTodos, formData, updateFormData}) {

    

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodos([
            ...todos,
            {title:formData.title, date: formData.date, ouvert : false, id: Math.ceil(Math.random() * 10000)}
        ])     
        // ... submit to API or something

    };
    /*
    return (

        
        <div>
            <form>
                <label for="title">Titre:</label><br/>
                <input type="text" id="title" name="title" onChange={handleChange}/><br/><br/>

                <label for="date">Date:</label><br/>
                <input type="date" id="date" name="date" onChange={handleChange}/><br/><br/>

                <input type="submit" value="Envoyer" onClick={handleSubmit}/>
            </form>

        </div>

    )
    */
}

export default Todo;