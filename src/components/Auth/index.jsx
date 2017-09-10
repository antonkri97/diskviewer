import React, { Component }        from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import PropTypes                   from 'prop-types';

export default class Auth extends Component {
  static propTypes = {
    onAuth: PropTypes.func,
    onRedirect: PropTypes.func
  }

  componentDidMount() {
    this.props.onAuth();
  }

  render() {
    return (
      <Row>
        <Col sm={4} smPush={2} smPull={2} smOffset={2} style={{ marginTop: '250px' }}>
          <Panel header='Яндекс.Диск'>
            <div className="text-center">
              <Button onClick={this.props.onRedirect}>Авторизоваться</Button>
            </div>
          </Panel>
        </Col>
      </Row>
    );
  }
}
