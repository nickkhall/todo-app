import React from 'react';

// MUI Colors
import red from '@material-ui/core/colors/red';

// Material UI Components
import CommonButton from './commonButton';

const SaveButton = ({
  text = 'Save',
  action,
  disabled = false,
  className
}) => (
  <CommonButton
    type="submit"
    text={text}
    action={action}
    disabled={disabled}
    className={className}
    extraStyles={{
      background: red[500],
      color: '#FFF'
    }}
  />
);

export default SaveButton;
