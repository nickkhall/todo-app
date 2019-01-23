import React from 'react';

// Component Styles
import buttons from 'components/Styles/buttons';

// Components
import CommonButton from './commonButton';

const CancelButton = ({ action, disabled = false, extraStyles = {} }) => (
  <CommonButton
    type={buttons.secondary}
    text="Cancel"
    action={action}
    disabled={disabled}
    extraStyles={extraStyles}
  />
);

export default CancelButton;
