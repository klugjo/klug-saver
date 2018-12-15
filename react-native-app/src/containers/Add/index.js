import React from 'react';
import { connect } from 'react-redux';

import Root from './Root';
import { addExpense, putDropboxArchive } from '../../actions';

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(addExpense(payload)),
  putDropboxArchive: () => dispatch(putDropboxArchive())
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
