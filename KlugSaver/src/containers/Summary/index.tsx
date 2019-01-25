import { connect } from 'react-redux';

import Root from './Root';
import { IMainState, IExpense, ICategoryMap } from '../../typings';
import { getCategoryMapFromList } from '../../selectors';

interface IStateProps {
  expenses: IExpense[];
  categoryMap: ICategoryMap;
}

interface IDispatchProps {
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    expenses: state.expenses,
    categoryMap: getCategoryMapFromList(state.categories)
  };
};

const mapDispatchToProps = (): IDispatchProps => ({

});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Root);
