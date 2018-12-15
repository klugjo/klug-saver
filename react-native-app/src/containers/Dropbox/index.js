import React from 'react';
import { connect } from 'react-redux';

import { saveDropboxToken } from '../../actions';
import Root from './Root';

const mapStateToProps = state => {
  return {
    dropboxToken: state.dropboxToken
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveDropboxToken: (token) => dispatch(saveDropboxToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
