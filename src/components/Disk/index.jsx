import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Directory from './Directory';
import { PageHeader } from 'react-bootstrap';

export default class Disk extends Component {

  static propTypes = {
    onInitialLoad: PropTypes.func,
    items: PropTypes.array,
    totalSize: PropTypes.number
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
        <Directory items={this.props.items} />
      </div>
    )
  }
}
