import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Item from './Item';

const Directory = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="text-center">Диск пуст</h2>
  }

  return (
    <Row>
      {
        items.map((item, i) => (
          <Col xs={2} key={i}>
            <Item item={item} />
          </Col>
        ))
      }
    </Row >
  );
};

Directory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      created: PropTypes.string,
      modified: PropTypes.string,
      name: PropTypes.string,
      preview: PropTypes.string,
      path: PropTypes.string,
      type: PropTypes.string
    })
  )
};

export default Directory;
