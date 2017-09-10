import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Logout = ({ onLogout }) => (
  <Row>
    <Col xsOffset={11}>
      <Button onClick={onLogout}>Выйти</Button>
    </Col>
  </Row>
);

Logout.propTypes = {
  onLogout: PropTypes.func
};

export default Logout;
