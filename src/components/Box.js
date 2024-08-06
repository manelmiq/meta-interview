import React from 'react';

const Box = ({data, handleSelect, selectedItem}) => {
  return (
    <div className="box">
      {data && data.map((item, index) => (
        <p key={index}>
          <input
            type="checkbox"
            onClick={(e) => {
              if (e.target.checked) {
                handleSelect(item, 'add')
              } else {
                handleSelect(item, 'remove')
              }
            }}
            checked={selectedItem.includes(item)}
          />
          {item}
        </p>
      ))}
    </div>
  );
}
export default Box;
