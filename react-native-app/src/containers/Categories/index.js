import { connect } from 'react-redux';

import Categories from './Categories';

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
