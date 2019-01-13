import { connect } from 'react-redux';

import Root from './Root';
import { IMainState, IExpense } from '../../typings';

interface IStateProps {
  expenses: IExpense[];
}

interface IDispatchProps {
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (): IDispatchProps => ({

});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Root);
