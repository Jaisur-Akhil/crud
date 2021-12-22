/** @format */

import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
const useStyle = makeStyles({
  header: {
    background: '#111111',
  },
  tabs: {
    color: '#FFFFFF',
    margin: 8,
    textDecoration: 'none',
    fontSize:18
  },
});
const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position='static'>
      <Toolbar>
        <Link to='./' className={classes.tabs}>
          Crud
        </Link>
        <NavLink to='./all' className={classes.tabs}>
          All User
        </NavLink>
        <Link to='./add' className={classes.tabs}>
          Add User
        </Link>

        {/* <Typography> CRUD  </Typography>
                <Typography> All User  </Typography>
                <Typography> Add User </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
