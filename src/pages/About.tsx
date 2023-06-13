import React, {ReactElement, FC} from "react";
import {
    Grid,
    Typography,
    CardContent,
    Card,
    Box,
    Divider,
    Button
  } from '@mui/material';
  import Text from '../components/Text';
// import Label from '../components/Label';
import { useParams } from "react-router-dom"

import axios from 'axios';

import { IUser } from '../models/crypto_order';

import { useEffect } from 'react';

const About: FC<any> = (): ReactElement => {
    let params = useParams()

    const defaultUsers:IUser[] = [];
    const [detail, setUserDetail]: [IUser[], (posts: IUser[]) => void] = React.useState(defaultUsers);

    useEffect(() => {
        axios.get(`http://localhost:3001/userDetail/${params.id}`)
    .then(response => {
        setUserDetail(response.data.data);
        console.log(response.data.data)
    })
    }, []);


    return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Personal Details
              </Typography>
              <Typography variant="subtitle2">
                Manage informations related to your personal details
              </Typography>
            </Box>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
          {detail.map((row) => (
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    ID:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>{row.id}</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Name:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>{row.name}</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  Username:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                    <Text color="black">{row.username}</Text>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                    <Text color="black">
                    {row.email}
                    </Text>
                  </Box>
                </Grid>
                {/* <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  Address:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                  {/* {Object.keys(row.address).map((key) => ( */}
                    {/* <Text color="black">{key}</Text> */}
                  {/* ))} */}
                  {/* </Box> */}
                {/* </Grid> */} 
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  Phone:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                    <Text color="black">{row.phone}</Text>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  Website:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                    <Text color="black">{row.website}</Text>
                  </Box>
                </Grid>
              
              </Grid>
            </Typography>
          ))}

          </CardContent>
        </Card>
      </Grid>
    </Grid>
    );
};

export default About;