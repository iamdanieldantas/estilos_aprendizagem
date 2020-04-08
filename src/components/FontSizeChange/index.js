import React from 'react';
import FontSizeChanger from 'react-font-size-changer';


const FontSizeChange = () => (
  <FontSizeChanger className="expand-button"
    targets={['.target-font-size .content']}
    onChange={(element, newValue, oldValue) => {
      console.log(element, newValue, oldValue);
    }}

    options={{
      stepSize: 1,
      range: 3
    }}
    customButtons={{
      up: <span style={{ 'fontSize': '36px' }}>A</span>,
      down: <span style={{ 'fontSize': '20px' }}>A</span>,
      style: {
        backgroundColor: '#4682b4',
        color: 'white',
        WebkitBoxSizing: 'border-box',
        WebkitBorderRadius: '5px',
        width: '60px',
        cursor: 'pointer',
      },
      buttonsMargin: 10
    }}
  />
);

export default FontSizeChange