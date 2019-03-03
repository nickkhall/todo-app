// Utils
import { testCommonComponentAttrs } from 'utils/tests';

// Styles
import styles from './styles';

// Components
import CreateTodoForm from './form';

const mockProps = {
  classes: styles
};

describe('<CreateTodoForm />', () => {
  testCommonComponentAttrs(CreateTodoForm, mockProps);
});
