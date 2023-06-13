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
import TextField from '@mui/material/TextField';

  import Text from '../components/Text';
// import Label from '../components/Label';
import { useParams } from "react-router-dom"

import axios from 'axios';

import { IUser } from '../models/crypto_order';

import { useEffect , FormEvent} from 'react';

const About: FC<any> = (): ReactElement => {
    let params = useParams()

    const defaultUsers:IUser[] = [];
    const [detail, setUserDetail]: [IUser[], (posts: IUser[]) => void] = React.useState(defaultUsers);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
        dataId: {value: number}
        dataName: {value: string}
        dataUsername: {value: string}
        dataEmail: {value: string}
        dataPhone: {value: string}
        dateWeb: {value: string}
    }

        console.log(formElements.dataName.value)
        const user = {
            id: formElements.dataId.value,
            name: formElements.dataName.value,
            username: formElements.dataUsername.value,
            email: formElements.dataEmail.value,
            phone: formElements.dataPhone.value,
            website: formElements.dateWeb.value,
          }
          axios.post('http://localhost:3001/userCreate', user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
    'Access-Control-Allow-Methods': '*',
    "Content-Type": "application/json"
            },
          })
    .then(response => {
        setUserDetail(response.data.data);
        console.log(response.data.data)
    })



      };


    
    

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
                Create User
              </Typography>
              <Typography variant="subtitle2">
                {/* Manage informations related to your personal details */}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    ID:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                <TextField
                      id="dataId"
                      name="dataId"
                      variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Name:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                <TextField
                      id="dataName"
                      name="dataName"
                      variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  Username:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                  <TextField
                      id="dataUsername"
                      name="dataUsername"

                      variant="standard"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                  <TextField
                      id="dataEmail"
                      name="dataEmail"
                      variant="standard"
                    />
                  </Box>
                </Grid>
    
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  Phone:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                  <TextField
                      id="dataPhone"
                      name="dataPhone"
                      variant="standard"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  Website:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                  <TextField
                      id="dateWeb"
                      name="dateWeb"
                      variant="standard"
                    />
                  </Box>
                </Grid>
                
               
              </Grid>
              <Grid item xs={12} sm={4} md={10} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  <Button
                    sx={{ mt: { xs: 2, md: 0 } }}
                    variant="contained"
                    style={{marginBlock:10}}
                    type="submit"
                    >
                        Submit
                    </Button>
                  </Box>
              </Grid>
            </Typography>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    );
};

export default About;