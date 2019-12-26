import React, { useState, useCallback } from 'react';
import { Input } from 'native-base';

const CustomInput = props => {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    text => {
      setValue(text);
      props.onChange(text);
    },
    [props],
  );

  return (
    <Input
      {...props}
      value={value}
      onChangeText={text => {
        onChange(text);
      }}
    />
  );
};

export default CustomInput;
