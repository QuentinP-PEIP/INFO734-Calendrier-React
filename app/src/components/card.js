import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
      fontSize: 50,
      textAlign: 'center',
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function CardTodo({todo, todos, setTodos}) {

    const classes = useStyles();
    
    const handleDone = () => {
        setTodos(todos.map((item) => {
          
          if (item.id === todo.id) {
            if (avant_date(item.date)){
              afficher_image(item.image);
                return item;
            }
          }
          return item;
        }));
    };

    return(

        <Card className={classes.root} variant="outlined">
        <CardContent onClick = {handleDone}>
          <Typography className={classes.title} color="primary" gutterBottom>
            <b><span className={`"title"`}> {todo.title} </span></b>
          </Typography>
        </CardContent>
        </Card>
        
    );
    
    function avant_date(date_objet){ //Renvoie true si date_objet est avant la date actuelle sinon renvoie false
      let odate = date_objet.split("-"); //On sépare l'année, le mois et le jour dans un tableau
      
      const date = new Date(Date.now());
      const month = parseInt(date.getMonth()) + 1; //Car getMonth() est de 0 à 11 et non 1 à 12!
      
      if(odate[0] <= date.getFullYear() && 
        odate[1] <= month.toString() && //Modifier en string à cause de la modification du dessus
        odate[2] <= date.getDate()){
          return true;
      }
      else return false;
    }

    function afficher_image(img_objet) {
      var myWindow = window.open("", "MsgWindow", "width=800,height=800");
      var chemin = "./image_noel/" + img_objet;
      console.log(chemin);
      myWindow.document.write("<img src=" + chemin + ">");
    }
}