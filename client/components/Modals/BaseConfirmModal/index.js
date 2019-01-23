import { connect } from 'react-redux';

// Actions
import { closeModal } from 'actions/Modals';

// Components
import BaseConfirmModal from './baseConfirmModal';

export const mapDispatchToProps = dispatch => ({
  onCancel: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(BaseConfirmModal);
