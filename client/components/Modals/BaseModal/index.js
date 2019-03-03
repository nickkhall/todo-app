import { connect } from 'react-redux';

// Actions
import { closeModal } from 'actions/Modals';

// Components
import BaseModal from './baseModal';

export const mapDispatchToProps = dispatch => ({
  close: () => dispatch(closeModal())
});

export const mapStateToProps = state => ({
  modalStack: state.modalsReducer.modalStack
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseModal);
