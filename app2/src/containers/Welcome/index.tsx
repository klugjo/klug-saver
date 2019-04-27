import { connect } from 'react-redux';
import { IMainState } from '../../typings';
import Root from './Root';

interface IStateProps {
}

interface IDispatchProps {
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
  };
};

const mapDispatchToProps = (): IDispatchProps => ({

});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Root);
