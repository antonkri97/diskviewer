import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Address = ({ path, history }) => (
  <Breadcrumb>
    {
      path.map((p, i) => <BreadcrumbItem onClick={history[i]} key={i}>{p}</BreadcrumbItem>)
    }
  </Breadcrumb>
);

Address.propTypes = {
  path: PropTypes.arrayOf(
    PropTypes.string
  ),
  history: PropTypes.arrayOf(
    PropTypes.func
  )
};

export default Address;
