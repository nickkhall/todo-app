import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';

// Components
import ContentSection from 'components/Layout/ContentSection';

const Forbidden = () => (
  <ContentSection>
    <Typography variant="display3" gutterBottom>
      Forbidden
    </Typography>
    <Typography variant="body1" gutterBottom>
      This page is restricted.
    </Typography>
  </ContentSection>
);

export default Forbidden;
