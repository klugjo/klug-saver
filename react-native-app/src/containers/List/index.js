import React from 'react';
import { connect } from 'react-redux';

import List from './List';

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
