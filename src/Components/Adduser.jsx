/** @format */
import { addUser } from '../Service/api';
import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyle = makeStyles({
  container: {
    width: '50%',
    margin: '10% 0 0 30%',
    '& > *': { marginTop: 20 },
  },
});

const initialValues = { name: '', username: '', email: '', phone: '' }; // Object

const Adduser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user; // destructuring
  const classes = useStyle();
  let navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e.target.value); // teh value i am inserting
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');
  };
  return (
    <FormGroup className={classes.container}>
      <Typography variant='h5'>Add User</Typography>
      <FormControl>
        <InputLabel htmlFor='crud'>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='name'
          value={name}
          id='crud'
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='crud'>UserName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='username'
          value={username}
          id='crud'
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='crud'>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='email'
          value={email}
          id='crud'
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='crud'>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='phone'
          value={phone}
          id='crud'
        />
      </FormControl>

      <Button
        variant='contained'
        color='primary'
        onClick={() => addUserDetails()}>
        Add User
      </Button>
    </FormGroup>
  );
};

export default Adduser;
