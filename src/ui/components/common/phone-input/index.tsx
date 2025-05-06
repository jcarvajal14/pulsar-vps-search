import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputComponent = () => {
  return (
    <PhoneInput
          country={'us'}
          value='12345678'
      onChange={() => '123123123'}
      autocompleteSearch={false}
    />
  );
};
export default PhoneInputComponent;
