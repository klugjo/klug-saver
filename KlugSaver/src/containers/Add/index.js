import React from 'react';
import { connect } from 'react-redux';

import Add from './Add';

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Add);