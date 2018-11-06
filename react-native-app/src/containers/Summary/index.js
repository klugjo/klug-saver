import React from 'react';
import { connect } from 'react-redux';

import Summary from './Summary';

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
