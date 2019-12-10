import { connect } from 'react-redux';

import Add from './Add';
import { IMainState, IExpense, ICurrency, ICategory } from '../../typings';
import { addExpense, saveCategory } from '../../actions';

interface IStateProps {
  baseCurrency: ICurrency;
  customCurrency?: ICurrency;
  categories: ICategory[];
}

interface IDispatchProps {
  addExpense: (expense: IExpense) => void;
  saveCategory: (oldTitle: string, categoryToSave: ICategory) => void;
}

const mapStateToProps = (state: IMainState): IStateProps => {
  return {
    baseCurrency: state.baseCurrency,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  addExpense: (payload: IExpense) => dispatch(addExpense(payload)),
  saveCategory: (oldTitle: string, categoryToSave: ICategory) => dispatch(saveCategory(oldTitle, categoryToSave))
});

export default connect<IStateProps, IDispatchProps, {}, IMainState>(mapStateToProps, mapDispatchToProps)(Add);
