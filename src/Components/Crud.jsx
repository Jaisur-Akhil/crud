/** @format */
import { Link, NavLink } from 'react-router-dom';

const Crud = () => {
  return (
    <div>
      <h1>Commitee</h1>
      <a href='https://sakshamseva.org/aboutus/executive-commitee/'>
        <img
          src='https://images.unsplash.com/photo-1429704658776-3d38c9990511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1679&q=80'
          alt='Img'
        />
      </a>
      <Link to='https://sakshamseva.org/aboutus/executive-commitee/'>
        Comitee
      </Link>
      <br />
      <Link to='https://sakshamseva.org/aboutus/the-organization/about-saksham/'>
        About-Us
      </Link>
    </div>
  );
};
export default Crud;
