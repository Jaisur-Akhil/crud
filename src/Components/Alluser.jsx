/** @format */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../Service/api';
import Table from '@material-ui/core/Table';
import {
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  makeStyles,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: '90%',
    margin: '50px 0 0 50px', //top right botttom left
  },
  thead: {
    '& > *': {
      //include this and all of its child
      fontSize: 20,
      background: '#000000',
      color: '#FFFFFF',
    },
  },
  row: {
    '& > *': {
      fontSize: 17,
    },
  },
});

const Alluser = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // equilvalent to component did mount
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
    console.log(response.data);
    console.log('HI from response');
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell className={classes.thead}>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.row} key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Button
                variant='contained'
                color='primary'
                style={{ marginRight: 10 }}
                component={Link}
                to={`../edit/${user.id}`}>
                Edit
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => deleteUserData(user.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Alluser;
