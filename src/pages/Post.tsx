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
import {useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';


import axios from 'axios';

import { IPost } from '../models/crypto_order';

import { useEffect } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  


const Post: FC<any> = (): ReactElement => {

    const defaultPosts:IPost[] = [];
    const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);

    useEffect(() => {
        axios.get('http://localhost:3001/post')
    .then(response => {
        setPosts(response.data.data);
    })
    }, []);
    

    return (
    <Container fixed>
        <Grid container justifyContent="space-between" alignItems="center">
        <Grid item></Grid>
        <Grid item><Link to={'/postCreate'}>
            <Button
                sx={{ mt: { xs: 2, md: 0 } }}
                variant="contained"
                style={{marginBlock:10}}
            >
                Create Posts
            </Button></Link>
            </Grid>
        </Grid>
        <Box sx={{
            // width: 800,
            // height: '89vh',
            flexGrow: 1,
            // backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
       
        
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">User ID</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Body</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell >{row.userId}</StyledTableCell>
              <StyledTableCell >{row.title}</StyledTableCell>
              <StyledTableCell >{row.body}</StyledTableCell>
              <StyledTableCell align="center">
                <Stack direction="row" spacing={1} >
                <Link to={`/postDetail/${row.id}`}>
                    <IconButton color="secondary" aria-label="add an alarm"  >
                        <ListAltIcon />
                    </IconButton></Link>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Stack>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Box>
        </Container>

        
    );
};

export default Post;