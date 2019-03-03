import React from 'react';

// Material UI Components
import Button from '@material-ui/core/Button';

const CommonButton = ({
  type,
  onClick,
  action = onClick,
  label,
  text = label,
  children = text,
  disabled = false,
  extraStyles = {},
  className,
  ...rest
}) => (
  <Button
    style={{ ...extraStyles }}
    onClick={action}
    disabled={disabled}
    key={text}
    type={type}
    className={className}
    {...rest}
  >
    {children}
  </Button>
);

export default CommonButton;
