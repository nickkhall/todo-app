import React from 'react';

// MUI Components
import Button from '@material-ui/core/Button';

// Component Styles
import buttons from 'components/Styles/buttons';

const CancelButton = ({ action, disabled = false, extraStyles = {} }) => (
  <Button
    type={buttons.secondary}
    action={action}
    disabled={disabled}
  >
		Cancel
	</Button>
);

export default CancelButton;
