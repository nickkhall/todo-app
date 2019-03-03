import { testCommonComponentAttrs } from 'utils/tests';

// Components
import DeleteTodoModal from './delete';

const mockProps = {
  name: 'foobar'
};

describe('<DeleteTodoModal />', () => {
  testCommonComponentAttrs(DeleteTodoModal, mockProps);
});
