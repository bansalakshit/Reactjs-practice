import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default class Search extends Component {

  state = {
    value: ''
  }

  handleSelect = (res) => {
    this.props.callback(res)
  }

  data1 = [
    {     
      key: 'Andaman and Nicobar Islands',
      value: 'Andaman and Nicobar Islands'
    },
    {     
      key: 'Andra Pradesh',
      value: 'Andra Pradesh'
    },
    {     
      key: 'Arunachal Pradesh',
      value: 'Arunachal Pradesh'
    },
    {     
      key: 'Assam',
      value: 'Assam'
    },
    {     
      key: 'Bihar',
      value: 'Bihar'
    },
    {
      key: 'Chandigarh',
      value: 'Chandigarh'
    },
    {
      key: 'Chhattisgarh',
      value: 'Chhattisgarh'
    },
    {
      key: 'Dadra and Nagar Haveli',
      value: 'Dadra and Nagar Haveli'
    },
    {
      key: 'Daman and Diu',
      value: 'Daman and Diu'
    },
    {
      key: 'Delhi',
      value: 'Delhi'
    },
    {
      key: 'Goa',
      value: 'Goa'
    },
    {
      key: 'Gujarat',
      value: 'Gujarat'
    },
    {
      key: 'Haryana',
      value: 'Haryana'
    },
    {
      key: 'Himachal Pradesh',
      value: 'Himachal Pradesh'
    },
    {
      key: 'Jammu and Kashmir',
      value: 'Jammu and Kashmir'
    },
    {
      key: 'Jharkhand',
      value: 'Jharkhand'
    },
    {
      key: 'Karnataka',
      value: 'Karnataka'
    },
    {
      key: 'Kerala',
      value: 'Kerala'
    },
    {
      key: 'Lakshadweep',
      value: 'Lakshadweep'
    },
    {
      key: 'Madya Pradesh',
      value: 'Madya Pradesh'
    },
    {
      key: 'Maharashtra',
      value: 'Maharashtra'
    },
    {
      key: 'Manipur',
      value: 'Manipur'
    },
    {
      key: 'Meghalaya',
      value: 'Meghalaya'
    },
    {
      key: 'Mizoram',
      value: 'Mizoram'
    },
    {
      key: 'Nagaland',
      value: 'Nagaland'
    },
    {
      key: 'Orissa',
      value: 'Orissa'
    },
    {
      key: 'Pondicherry',
      value: 'Pondicherry'
    },
    {
      key: 'Punjab',
      value: 'Punjab'
    },
    {
      key: 'Rajasthan',
      value: 'Rajasthan'
    },
    {
      key: 'Sikkim',
      value: 'Sikkim'
    },
    {
      key: 'Tamil Nadu',
      value: 'Tamil Nadu'
    },
    {
      key: 'Telagana',
      value: 'Telagana'
    },
    {
      key: 'Tripura',
      value: 'Tripura'
    },
    {
      key: 'Uttaranchal',
      value: 'Uttaranchal'
    },
    {
      key: 'Uttar Pradesh',
      value: 'Uttar Pradesh'
    },
    {
      key: 'West Bengal',
      value: 'West Bengal'
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