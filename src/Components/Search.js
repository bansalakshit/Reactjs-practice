import React from 'react'
import ReactSearchBox from 'react-search-box'

export default function Search(props) {
  const handleSelect = (res) => {
    props.callback(res)
  }

  const data = [
    { 
      key: 'Andaman and Nicobar Islands',
      value: 'Andaman and Nicobar Islands'
    },
    { 
        key: 'Andhara Pradesh',
        value: 'Andhara Pradesh'
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
        key: 'Dadra and Nagar Haveli',
        value: 'Dadra and Nagar Haveli'
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
        key: 'Ladakh',
        value: 'Ladakh'
    },
    { 
        key: 'Lakshadweepk',
        value: 'Lakshadweepk'
    },
    { 
        key: 'Madhya Pradesh',
        value: 'Madhya Pradesh'
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
        key: 'Odissa',
        value: 'Odissa'
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
        key: 'Maharashtra',
        value: 'Maharashtra'
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
        key: 'Telangana',
        value: 'Telangana'
    },
    { 
        key: 'Tripura',
        value: 'Tripura'
    },
    { 
        key: 'Uttarakhand',
        value: 'Uttarakhand'
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

  return (
    <ReactSearchBox
      placeholder="Search state.."
      data={data}
      inputBoxHeight='50px'
      inputBoxFontSize='20px'
      inputBoxBorderColor='black'
      onSelect={handleSelect}
    />
  )

}