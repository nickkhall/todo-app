// Test utils
import { testCommonComponentAttrs } from 'utils/tests';

import ContentSection from './contentSection';

const defaultProps = { classes: {} };

describe('<ContentSection /> component', () => {
  testCommonComponentAttrs(ContentSection, defaultProps);
});
