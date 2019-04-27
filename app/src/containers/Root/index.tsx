import { connect } from 'react-redux';
import { IMainState } from '../../typings';
import Root from './Root';

interface IStateProps {
  loading: boolean;
  tutorialDone: boolean;
}

interface IDispatchProps {
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    loading: state.loading,
    tutorialDone: state.tutorialDone
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Root);
