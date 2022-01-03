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
    const date = new Date(Date.now());
    const month = parseInt(date.getMonth()) + 1;
    const now = date.getDate().toString();
    let day = "";

    if (now.length < 2){
      day = "0" + now;
    }
    else{
      day = now;
    }

    const datea = date.getFullYear() + "-" + month.toString() + "-" + day;

    const handleDone = () => {
        
        // ... submit to API or something
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
              if (avant_date(item.date)){
                  return { 
                      ...item, ouvert : !item.ouvert
                  }
              }
            }
            return item;
        }));
    };
    /*
    const handleDelete = () => {
        
        // ... submit to API or something
        setTodos(todos.filter((el) => el.id !== todo.id));

    };
    */

    return(

        <Card className={classes.root} variant="outlined">
        <CardContent onClick={handleDone}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <b><span className={`"title" ${todo.ouvert ? "completed" : ''}`}> {todo.title} </span></b>
          </Typography>
          <Typography variant="body2" component="p">
            {todo.date}
          </Typography>
        </CardContent>
        </Card>

        // <div>
        //     <span className={`"title" ${todo.done ? "completed" : ''}`}> {todo.title} </span>    
        // </div>
        
    );
    
    function avant_date(date_objet){ //Renvoie true si date_objet est avant la date actuelle sinon renvoie false
      const date = new Date(Date.now());
      const month = parseInt(date.getMonth()) + 1;

      const datea = date.getFullYear() + "-" + month.toString() + "-" + date.getDate();

      return (date_objet <= datea);
    }
}