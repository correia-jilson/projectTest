import {
    Card,
    CardContent,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import React from 'react';
// icons
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
// components
import Paragraph from './Paragraph';
import Title from './Title';


const Content = () => {
  return (    
        <Grid container spacing={0}   
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10,
            px: 2,
        }}
        >
            <Grid item xs={12} sm={12} md={5}
            component = 'section'
            >
                <Title
                text={
                    'What we are offering?'
                }
                textAlign={'start'}
                />

                <Typography 
                variant='h6'
                component='h4' 
                sx = {{
                    fontWeight: '400',
                    paddingTop: 1,
                }}
                >
                    Domain Solutions.
                </Typography>

                <Paragraph 
                text={
                    ' We have more 1000 Customers\
                    and our customers trust on out quality\
                    product and trust own our product.'
                }
                maxWidth = {'75%'}
                mx={0}
                textAlign={'start'}
                />
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={true}
                sx={{
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                }}>
                    <a href="/productintropage/index.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <CardContent>
                            <IconButton>
                                <SportsGymnasticsIcon fontSize="large" color="secondary" />
                            </IconButton>
                            <Typography 
                            variant="h5" 
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                                color: 'inherit'
                            }}
                            >
                            Products
                            </Typography>
                        </CardContent>
                    </a>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={true}
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <a href="/Jobintroduction page/index.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <CardContent>
                            <IconButton>
                                <LocalParkingIcon fontSize="large" color="secondary" />
                            </IconButton>
                            <Typography 
                            variant="h5" 
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                                color: 'inherit'
                            }}
                            >
                            Pages
                            </Typography>
                        </CardContent>
                    </a>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2}
            sx={{
                display: {xs: 'none', sm: 'block'},
            }}  
            >
                <Card 
                square={ true }
                sx={{ 
                    boxShadow: 'none',
                    minHeight: 180,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <CardContent>
                        <ArrowCircleRightRoundedIcon
                        fontSize="large"
                        color="secondary" />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={true}
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <a href="/Homedesign/index.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <CardContent>
                            <IconButton>
                                <FastfoodOutlinedIcon fontSize="large" color="secondary" />
                            </IconButton>
                            <Typography 
                            variant="h5" 
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                                color: 'inherit'
                            }}
                            >
                            Ideas
                            </Typography>
                        </CardContent>
                    </a>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={true}
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',                    
                    border: '1px solid #ccc',
                }}>
                    <a href="/Motorcycles/index.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <CardContent>
                            <IconButton>
                                <PoolOutlinedIcon fontSize="large" color="secondary" />
                            </IconButton>
                            <Typography 
                            variant="h5" 
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                            >
                            Domains
                            </Typography>
                        </CardContent>
                    </a>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={true}
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc',
                }}>
                    <a href="/Restaurant/index.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <CardContent>
                            <IconButton>
                                <WifiPasswordIcon fontSize="large" color="secondary" />
                            </IconButton>
                            <Typography 
                            variant="h5" 
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                            >
                            Websites
                            </Typography>
                        </CardContent>
                    </a>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Content