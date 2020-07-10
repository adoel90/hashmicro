import React from 'react';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import { ButtonBase, Typography, Box } from '@material-ui/core';

import pict1 from '../images/1.jpg'
import pict2 from '../images/2.jpg'
import pict3 from '../images/3.jpg'
import pict4 from '../images/4.jpg'
import pict5 from '../images/5.jpg'
import pict6 from '../images/6.jpg'


const useStyles = makeStyles(theme => ({

        root: {
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 300,
            width: '100%',
          },
          image: {
            position: 'relative',
            height: 200,            
            [theme.breakpoints.down('xs')]: {
              width: '100% !important', // Overrides inline-style
              height: 300,
            },       
                                               
            '&:hover, &$focusVisible': {
              zIndex: 1,
              '& $imageBackdrop': {
                opacity: 0.4,
              },
              '& $imageMarked': {
                opacity: 0                
              },
              '& $imageTitle': {
                outline: `4px solid ${theme.palette.secondary.dark}`,
                border: `4px solid ${theme.palette.common.transparent}`,
                backgroundColor: theme.palette.common.transparent,
              },
            },
          },
          focusVisible: {},
          imageButton: {          
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
          },
          imageSrc: {          
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          },
          imageBackdrop: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: theme.palette.common.black,
            opacity: 0.1,
            transition: theme.transitions.create('opacity'),
          },
          imageTitle: {
            position: 'relative',
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
            backgroundColor: theme.palette.common.black,
            border: `4px solid ${fade(theme.palette.common.white, 0.7)}`,
            outline: `4px solid black`
            
          },
          imageMarked: {//*will be change
            height: 3,
            width: 18,
            backgroundColor: theme.palette.common.transparent,
            position: 'absolute',
            bottom: -2,
            left: 'calc(50% - 9px)',
            transition: theme.transitions.create('opacity'),
          }          
    })
); 

const CardsImage = () => {
            
    const classes = useStyles();  
    const theme = useTheme()  

    return (
      
        <div className={classes.root}>
            {dummyData.map((image) => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{ width: image.width}}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    
                    <span className={classes.imageButton}>                    
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                            contentEditable='true'
                        >
                            <span style={{color: `${theme.palette.secondary.dark}`}}>• • • </span> &nbsp; {image.title} &nbsp; <span style={{color: `${theme.palette.secondary.dark}`}}>• • • </span>
                            <br />                           
                            <Typography 
                                component="span"
                                variant='h5' 
                                color={`${theme.palette.common.white}`}                                
                            >
                                {image.subtitle}
                            </Typography>
                            <br />
                            <Typography 
                                component="span"
                                variant='caption' 
                                color={`${theme.palette.common.white}`}
                            >
                                <i>{image.date}</i>
                            </Typography>
                            <span className={
                                classes.imageMarked
                                
                            } />

                        </Typography>
                        
                    </span>                    
                </ButtonBase>
            ))}
        </div>
    
    )
};

export default CardsImage;


const dummyData = [
    {
        id: 1,
        title: "Repice",
        subtitle: "Autumn Chesnut Rice",
        date: 'August 7, 2015',
        url: pict1,
        width: '30%'
    },
    {
        id: 2,
        title: "Story",
        subtitle: "Travel the World",
        date: 'August 20, 2015',
        url: pict2,
        width: '40%'
    },
    {
        id: 3,
        title: "Stories",
        subtitle: "Diary of Mine",
        date: 'August 20, 2015',
        url: pict3,
        width: '30%'
    },
    {
        id: 4,
        title: "Repice",
        subtitle: "Autumn Chesnut Rice",
        date: 'August 7, 2015',
        url: pict4,
        width: '30%'
    },
    {
        id: 5,
        title: "Story",
        subtitle: "Travel the World",
        date: 'August 20, 2015',
        url: pict5,
        width: '40%'
    },
    {
        id: 6,
        title: "Stories",
        subtitle: "Diary of Mine",
        date: 'August 20, 2015',
        url: pict6,
        width: '30%'
    },
    {
        id: 7,
        title: "Stories",
        subtitle: "Diary of Mine",
        date: 'August 20, 2015',
        url: pict3,
        width: '30%'
    },

    {
        id: 8,
        title: "Story",
        subtitle: "Travel the World",
        date: 'August 20, 2015',
        url: pict2,
        width: '40%'
    },
    {
        id: 9,
        title: "Repice",
        subtitle: "Autumn Chesnut Rice",
        date: 'August 7, 2015',
        url: pict1,
        width: '30%'
    },

]