import React from 'react';
import { Select } from 'antd';

export const DropdownType = ({ type }) => {
  const handleChange = (value) => {    
    type(value);
  };

  return (
    <Select
      defaultValue="Payor"
      className='w-full'
      onChange={handleChange}
      options={[
        {
          value: 'Payor',
          label: 'Payee',
        },
        {
          value: 'Payee',
          label: 'Payor',
        },
      ]}
    />
  );
};
