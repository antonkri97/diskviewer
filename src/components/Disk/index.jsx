import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Directory from './Directory';
import { PageHeader } from 'react-bootstrap';
import Address from './Address';

export default class Disk extends Component {

  static propTypes = {
    onInitialLoad: PropTypes.func,
    items: PropTypes.array,
    totalSize: PropTypes.number,
    path: PropTypes.arrayOf(
      PropTypes.string
    ),
    history: PropTypes.arrayOf(
      PropTypes.func
    )
  }

  static defaultProps = {
    items: []
  }

  componentDidMount() {
    this.props.onInitialLoad('/');
  }

  render() {
    return (
      <div>
        <PageHeader className='text-center'>Yandex.Disk</PageHeader>
        <Address path={this.props.path} history={this.props.history} />
        <Directory items={this.props.items} />
      </div>
    )
  }
}
