import { connect } from 'react-redux';

import Root from './Root';

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
