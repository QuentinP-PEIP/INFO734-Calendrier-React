import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import "../App.css";
  
const useStyles = makeStyles({
    root: {
        width: 100,
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function CardTodo({todo, todos, setTodos}) {

    const classes = useStyles();

    const handleDone = () => {
        
        // ... submit to API or something
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return { 
                    ...item, done : !item.done
                }
            }

            return item;
        }));

    };

    const affichageImage = () => {
      var img = document.createElement("img");
      img.src = "1.png";

      //var div = document.getElementById("case1");
      //div.appendChild(img);
    
      return document.getElementById("case1").appendChild(img);
    };

    return(

        <Card className={classes.root} variant="outlined" onClick={handleDone}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <b><span className={`"title" ${todo.done ? "completed" : ''}`}> {todo.title}</span></b>
          </Typography>
          <Typography variant="body2" component="p">
            {todo.description}
          </Typography>
        </CardContent>
        <CardActions>

        </CardActions>
            <div id ="case1"> {todo.done ? {affichageImage} : ''} </div>

        </Card>

        // <div>
        //     <span className={`"title" ${todo.done ? "completed" : ''}`}> {todo.title} </span>    
        // </div>
        
    );
}