import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box';
import { Northern, Central, Western, Eastern, Union, Northeastern } from '../helpers';

export default class Search extends Component {

  state = {
    value: ''
  }

  handleSelect = (res) => {
    let states;
    if (res.key === 'Northern region') {
      states = Northern;
    } else if (res.key === 'Central region') {
      states = Central;
    } else if (res.key === 'Western region') {
      states = Western;
    } else if (res.key === 'Eastern region') {
      states = Eastern;
    } else if (res.key === 'Southern region') {
      states = Central;
    } else if (res.key === 'Northeastern region') {
      states = Northeastern;
    } else if (res.key === 'Union Territories') {
      states = Union;
    }
    this.props.callback(states)
  }

  data1 = [
    {
      key: 'Northern region',
      value: 'Northern region'
    },
    {
      key: 'Central region',
      value: 'Central region'
    },
    {
      key: 'Western region',
      value: 'Western region'
    },
    {
      key: 'Eastern region',
      value: 'Eastern region'
    },
    {
      key: 'Southern region',
      value: 'Southern region'
    },
    {
      key: 'Northeastern region',
      value: 'Northeastern region'
    },
    {
      key: 'Union Territories',
      value: 'Union Territories'
    }
  ]

  render() {
    return (
      <ReactSearchBox
        placeholder="Search here.."
        data={this.data1}
        inputBoxHeight='50px'
        inputBoxFontSize='20px'
        inputBoxBorderColor='black'
        onSelect={this.handleSelect}
      />
    )
  }
}