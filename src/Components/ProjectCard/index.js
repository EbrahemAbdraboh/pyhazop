import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  clientName:{
    marginLeft: '20px'
  },
  block:{
    display: 'block'
  }
});


const ProjectCard = props => {

  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.postimg.cc/yxvGRKtw/project-card.png"
            title="pyhazop project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" color='primary'>
              Project Name
            </Typography>

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container spacing={1}>
            <Grid item xs={4} className={classes.root}>
              <Typography variant="button" display="block" gutterBottom>
                Client
              </Typography>
              <Typography variant="caption" display="block"  gutterBottom >
                Shell
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.root}>
              <Typography variant="button" display="block"  gutterBottom>
                Nodes#
              </Typography>
              <Typography variant="caption" display="block"  gutterBottom >
                15
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.root}>
              <Typography variant="button" display="block" gutterBottom>
                Progress
              </Typography>
              <Typography variant="caption" display="block"  gutterBottom >
                80%
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjectCard;
