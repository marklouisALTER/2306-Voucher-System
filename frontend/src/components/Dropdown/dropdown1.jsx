import React from 'react';
import { Select } from 'antd';

export const DropdownType1 = ({ type }) => {
  const handleChange = (value) => {    
    type(value);
  };

  return (
    <Select
      defaultValue="individual"
      className='w-full'
      onChange={handleChange}
      options={[
        {
          value: 'individual',
          label: 'Individual (Person)',
        },
        {
          value: 'non-individual',
          label: 'Non-Individual (Company)',
        },
      ]}
    />
  );
};
