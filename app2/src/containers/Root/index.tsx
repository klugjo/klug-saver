import { connect } from 'react-redux';
import { IMainState } from '../../typings';
import Root from './Root';

interface IStateProps {
  loading: boolean;
}

interface IDispatchProps {
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Root);
