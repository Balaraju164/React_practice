import React from 'react'
import {Typography,AppBar,Card,CardActions,CardMedia,CardContent,Grid,CssBaseline,Toolbar,Container,Button} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
//import useStyles from './Styles'
import useStyles from './Styles'

const cards=[1,2,3,4,5,6,7,8,9,10,11,12]

const Album = () => {

    const classes=useStyles()

    const edit=()=>{
      console.log("Hi mamaa")
    }

    return (
        <div>
            <CssBaseline />
    <AppBar position='relative'>
      <Toolbar>
      <PhotoCamera className={classes.icon}/>
      <Typography variant='h6'>My Album</Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={classes.container}>
      <Container maxWidth='sm'>
        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>About My Album</Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>Need to know about life in the way of how the we store/kept the memories in the way of digital</Typography>
      <div className={classes.button}>
        <Grid container spacing={1} justify='center'>
          <Grid item>
            <Button variant='contained' color='primary'>Check-in</Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='secondary'>Check-out</Button>
          </Grid>
        </Grid>
      </div>
      </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((c)=>(
              <Grid item key={c} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardmedia} 
                image="https://source.unsplash.com/random"
                title='Image title'/>
                <CardContent className={classes.cardcontent}>
                  <Typography variant='h5' gutterBottom>Heading</Typography>
                  <Typography variant='h5' gutterBottom>Picture speaks loats of words</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' variant='outlined' color='primary'>View</Button>
                  <Button size='small' variant='outlined' color='primary' onClick={()=>edit()}>Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
      </Container>
    </main>
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
              Memories@life.com
      </Typography>
      <Typography variant='subtitle1' align='center' color='textSecondary'>
              @copyrights ver 1.0.0.0
      </Typography>
    </footer>
        </div>
    )
}

export default Album;
