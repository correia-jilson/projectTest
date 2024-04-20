import React from 'react'
import { 
    Typography,
    Box,
    Stack
} from "@mui/material"

import Title from './Title'
import Paragraph from './Paragraph';

const Gallery = () => {



    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Websites and Pages'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Our offerings.
                </Typography>
                <Paragraph text={
                    'We have more than 1000 Customers and our\
                    customers trust in our quality products\
                    and we trust own our products as well. If you are interested,\
                    contact us.'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
                
                

            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>

            </Box>
        </Stack>

        
        
    );
    
};

export default Gallery