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

import { IPost } from '../models/crypto_order';

import { useEffect , FormEvent} from 'react';

const PostCreate: FC<any> = (): ReactElement => {
    let params = useParams()

    const defaultPosts:IPost[] = [];
    const [detail, setPostDetail]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
        dataId: {value: number}
        dataUserId: {value: string}
        dataTitle: {value: string}
        dataBody: {value: string}
    }

        // console.log(formElements.dataName.value)
        const user = {
            id: formElements.dataId.value,
            userId: formElements.dataUserId.value,
            title: formElements.dataTitle.value,
            body: formElements.dataBody.value,
          }
          axios.post('http://localhost:3001/postCreate', user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
    'Access-Control-Allow-Methods': '*',
    "Content-Type": "application/json"
            },
          })
    .then(response => {
      setPostDetail(response.data.data);
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
                Create Post
              </Typography>
              <Typography variant="subtitle2">
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
                    User ID:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                <TextField
                      id="dataUserId"
                      name="dataUserId"
                      variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  Title:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                  <TextField
                      id="dataTitle"
                      name="dataTitle"

                      variant="standard"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Body:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                  <TextField
                      id="dataBody"
                      name="dataBody"
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

export default PostCreate;