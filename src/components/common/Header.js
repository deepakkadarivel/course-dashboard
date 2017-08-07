import React from 'react';
import {Link} from 'react-router';
import Loading from './Loading';
import PropTypes from 'prop-types';

const Header = ({loading}) => {
  return (
    <nav>
      <Link to="/" activeClassName="active">Home</Link>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
      {" | "}
      <Link to="courses" activeClassName="active">Courses</Link>
      {loading && <Loading/>}
    </nav>
  );
};


Header.propTypes = {
  loading: PropTypes.bool.isRequired
};
export default Header;
