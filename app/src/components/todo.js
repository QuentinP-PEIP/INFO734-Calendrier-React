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
            {title:formData.title, description: formData.description, done : false, id: Math.ceil(Math.random() * 10000)}
        ])
        // ... submit to API or something

    };

    const affichage_plusieurs_todo = (e) => {
        e.preventDefault()

        for (let pas = 0; pas < 5; pas++) {
            addTodos([
                ...todos,
                {title:formData.title, description: formData.description, done : false, id: Math.ceil(Math.random() * 10000)}
            ])
            console.log('pas' + pas);
        }
    };

    return (

        <div>
            <form>
                <label for="title">Titre:</label><br/>
                <input type="text" id="title" name="title" onChange={handleChange}/><br/><br/>

                <label for="description">Description:</label><br/>
                <input type="text" id="description" name="description" onChange={handleChange}/><br/><br/>

                <input type="submit" value="Envoyer" onClick={affichage_plusieurs_todo}/>
            </form>

        </div>

    )
}

export default Todo;