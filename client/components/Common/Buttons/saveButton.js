import React from 'react';

// MUI Colors
import red from '@material-ui/core/colors/red';

// MUI Components
import Button from '@material-ui/core/Button';

const SaveButton = ({
  text = 'Save',
  action,
  disabled = false,
  className
}) => (
  <Button
    type="submit"
    text={text}
    action={action}
    disabled={disabled}
    className={className}
  >
		{ text }
	</Button>
);

export default SaveButton;
