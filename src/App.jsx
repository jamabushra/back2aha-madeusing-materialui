import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

import useStyles from './styles';

//const cards = [1, 2]

const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline /> {/*Does some base CSS styling for us uber useful*/}
            <AppBar position="relative"> {/*Our navigation bar */}
                <Toolbar>
                    <WbIncandescentIcon className={classes.icon} />
                    <Typography variant="h6">
                        Back2AHA
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}> {/*H E R O Section*/}
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Front-End Resources
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            See below a list of cards leading to useful resources I have found for HTML, CSS, JavaScript, The MERN Stack, and MaterialUI
                        </Typography>
                        {/* <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See all saved resources
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        See my favourites
                                    </Button>
                                </Grid>
                            </Grid>
                        </div> */}
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md"> {/*For our Cards */}
                    <Grid container spacing={4}>

                        <Grid item xs={12} sm={6} m={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://studywebdevelopment.com/images/brad-traversy-interview-facebook.jpg"
                                    title="image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        40+ Web Dev Resources
                                    </Typography>
                                    <Typography>
                                        A huge list of resources by TraversyMedia to help with all of your web dev projects.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="sm" color="primary" target="_blank" href="https://gist.github.com/bradtraversy/61171a9b81586f5bc4c0ca1e2beb59ab" >40+webDev</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} m={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://imagecompressor.com/images/imagecompressor/logo.svg"
                                    title="image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Image Compressor
                                    </Typography>
                                    <Typography>
                                        Website loading times can greatly be effected by big file sizes use the following link to compress your images so they load as fast as possible.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="sm" color="primary" target="_blank" href="https://imagecompressor.com/" >optimiZilla</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} m={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://cssfox.co/uploads/posts-featured/2019/01/cover-css-tricks-v17-website-design-monthly-mixup-sectionjpg-featured-image.jpeg"
                                    title="image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        CSS Tricks
                                    </Typography>
                                    <Typography>
                                        CSS is tricky so use the following link to find out how to master it to make it not so tricky.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="sm" color="primary" target="_blank" href="https://css-tricks.com/" >cssTricks</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} m={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://www.veracode.com/sites/default/files/styles/blog_post_resize_960/public/developer-guide-blog-2.png?itok=JQGRVjEX"
                                    title="image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Mem.Dev
                                    </Typography>
                                    <Typography>
                                        A great online tool for remembering the coding syntax and short cuts to keep you sharp.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="sm" color="primary" target="_blank" href="https://mem.dev/" >memDev</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} m={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://bootstrapious.com/ck_resources/img/image(36).png"
                                    title="image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Icons Fonts & Animations
                                    </Typography>
                                    <Typography>
                                        Use the buttons to visit flaticon, fontawesome and icons8 to find some awesome fonts/icons/and even animated icons.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="sm" color="primary" target="_blank" href="https://www.flaticon.com/" >flatIcon</Button>
                                    <Button size="sm" color="primary" target="_blank" href="https://fontawesome.com/" >fontAwesome</Button>
                                    <Button size="sm" color="primary" target="_blank" href="https://icons8.com/animated-icons" >icons8</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} m={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://assets.awwwards.com/awards/images/2018/05/google-fonts-cover-blue-1.jpg"
                                    title="image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Google Fonts
                                    </Typography>
                                    <Typography>
                                        You can use this to find great icons and fonts all for free. Also see a nice writeup of 20 great fonts on the secondary link.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="sm" color="primary" target="_blank" href="https://fonts.google.com/" >googleFonts</Button>
                                    <Button variant="outlined" color="secondary" target="_blank" href="https://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html" >20 Best Web Fonts</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>

                <Typography variant="h6" align="left" gutterBottom>
                    by Jama Bushra
                </Typography>
                <Typography variant="subtitle" align="left" color="textSecondary">
                    Give me stars on github if you found any of those resources useful i'll keep adding cards
                </Typography>
            </footer>
        </>
    );
}

export default App;