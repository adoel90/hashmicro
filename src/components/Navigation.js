import React from 'react';
import { Box, Breadcrumbs, Link, Typography, IconButton, Container} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const Navigation = () => {

    // const theme = useTheme();

    return (
        <Container>
            <Box display='flex' justifyContent='center' mt={4} mb={4}>
                <Breadcrumbs separator="•" aria-label="breadcrumb">
                    <Link color="inherit" href="/" >
                        <Typography color="primary" variant='subtitle2'>Home</Typography>                    
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" >
                        <Typography color="primary" variant='subtitle2'>Features</Typography>                       
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" >
                        <Typography color="primary" variant='subtitle2'>Layouts</Typography>                       
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" >
                        <Typography color="primary" variant='subtitle2'>Pages</Typography>  
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" >
                        <Typography color="primary" variant='subtitle2'>Light Version</Typography>                      
                    </Link>

                    <Typography color="primary" variant='subtitle2' style={{opacity: 0.6}} contentEditable='true'>
                        <i>Search and hit enter ...</i> &nbsp;
                        <IconButton size='small'>
                            <SearchIcon fontSize='small' />
                        </IconButton>
                    </Typography>
                </Breadcrumbs>
            </Box>
        </Container>
    )
};

export default Navigation;