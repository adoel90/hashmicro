import React from 'react';
import { Box, Typography, IconButton, Grid} from '@material-ui/core'
import { useTheme, makeStyles, fade } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import FavoriteIcon from '@material-ui/icons/Favorite';
import pictBackground from '../images/backgorund.jpg'
import logo from '../images/logowhite.png'


const useStyles = makeStyles((theme) => ({

    icon: {
        color: `${theme.palette.common.white}`, 
        border: `1px solid ${theme.palette.common.white}`, 
        opacity: 0.8,
        marginLeft: 16,
        '&::after' : {
  
            content: "''",
            width: '16px',        
            position: 'absolute',
            // left: 0,
            left: 44,                    
            top: '50%',
            zIndex: 1,
            borderBottom: `1px solid ${theme.palette.common.white}`
          },
        '&:hover':{
            border: `1px dashed ${theme.palette.secondary.light}`, 
            color: `${theme.palette.secondary.light}`, 
        }
            
    },
    iconWithoutLine: {
        color: `${theme.palette.common.white}`, 
        border: "1px solid white", 
        opacity: 0.8,
        marginLeft: 16,
        '&:hover':{
            border: `1px dashed ${theme.palette.secondary.light}`, 
            color: `${theme.palette.secondary.light}`, 
        }  
    }
}))
const Header = () => {

    // const theme = useTheme()
    const classes = useStyles();   

    return (
        
        <Box
            style={{
                backgroundImage: `url(${pictBackground})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                background: 'contain',
                filter: 'blur(0.5px)'
                

            }}
        >
            <Box display='flex' flexDirection='row' justifyContent='center'>
                <Box mt={8}>
                    <img src={logo} alt='logo' />
                </Box>              
            </Box>
           
            <Box display='flex' flexDirection='row' justifyContent='center'>          
                {
                    dummyData.map((item, i) => {
                        return (

                            <Box mb={8} mt={2} key={i}>                   
                                <IconButton aria-label="fb" className={item.id == 5 ? classes.iconWithoutLine : classes.icon} >
                                    {item.icon}
                                </IconButton>                                       
                            </Box> 
                        )
                    })
                }
            </Box>
        

        </Box>
    )
};

export default Header;

const dummyData = [
    {
        id: 1,
        icon: <FacebookIcon fontSize="small" />
    },
    {
        id: 2,
        icon: <TwitterIcon fontSize="small" />
    },
    {
        id: 3,
        icon: <PinterestIcon fontSize="small" />
    },
    {
        id: 4,
        icon: <InstagramIcon fontSize="small" />
    },
    {
        id: 5,
        icon: <FavoriteIcon fontSize="small" />
    }
]