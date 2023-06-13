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

import { IPost } from '../models/crypto_order';

import { useEffect } from 'react';

const PostDetail: FC<any> = (): ReactElement => {
    let params = useParams()

    const defaultPosts:IPost[] = [];
    const [detail, setPostDetail]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);

    console.log('dd')
    console.log(params.id)
    useEffect(() => {
        axios.get(`http://localhost:3001/postDetail/${params.id}`)
    .then(response => {
      setPostDetail(response.data.data);
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
                Posts Details
              </Typography>
              <Typography variant="subtitle2">
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
                    User ID:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>{row.userId}</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                  Title:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                    <Text color="black">{row.title}</Text>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Body:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                    <Text color="black">
                    {row.body}
                    </Text>
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

export default PostDetail;