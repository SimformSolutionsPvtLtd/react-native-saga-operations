import React, { useState, useCallback } from 'react';
import { Input } from 'native-base';

const CustomInput = props => {
  const [value, setValue] = useState(props.value);

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
