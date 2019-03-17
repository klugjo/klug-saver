import moment from 'moment';
import numeral from 'numeral';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KSButton } from '../../components';
import KSCurrencyPicker from '../../components/KSCurrencyPicker';
import { ICategory, ICurrency, IExpense, IThemeConstants, SideEnum } from '../../typings';
import { withTheme } from '../ThemeProvider/withTheme';
import AmountDisplay from './Components/AmountDisplay';
import Categories from './Components/Categories/Categories';
import SubCategoryModal from './Components/Categories/SubCategoryModal';
import Keypad from './Components/Keypad';
import { CommentsModal } from './Components/Metadata/CommentsModal';
import { DateModal } from './Components/Metadata/DateModal';
import { SideModal } from './Components/Metadata/SideModal';

export interface IAddProps {
  addExpense: (expense: IExpense) => void;
  baseCurrency: ICurrency;
  categories: ICategory[];
  saveCategory: (oldTitle: string, categoryToSave: ICategory) => void;
  theme: IThemeConstants;
}

export enum openModalEnum {
  currency,
  comments,
  date,
  side
}

interface IAddState {
  amount: string;
  selectedCategory?: ICategory;
  selectedSubCategory: string;
  customCurrency?: ICurrency;
  openModal?: openModalEnum;
  currency: ICurrency,
  comment?: string;
  customDate: moment.Moment;
  side: SideEnum
}

class Add extends React.Component<IAddProps, IAddState> {
  constructor(props: IAddProps) {
    super(props);

    this.state = this.getEmptyState();
  }

  render() {
    const {
      amount,
      selectedCategory,
      selectedSubCategory,
      openModal,
      currency,
      comment,
      customDate,
      side
    } = this.state;
    const { categories, saveCategory, theme } = this.props;

    return (
      <View style={styles(theme).container}>
        <View style={styles(theme).categories}>
          <Categories
            onPickCategory={this.onSelectedCategoryChange}
            selectedCategory={selectedCategory}
            categories={categories}
          />
        </View>
        <View style={styles(theme).metadata}>
          <AmountDisplay
            amount={amount}
            currency={currency}
            onCurrencyPickerOpen={this.openModal(openModalEnum.currency)}
          />
        </View>
        <View style={styles(theme).keyboard}>
          <Keypad
            addChar={this.addChar}
            deleteChar={this.deleteChar}
            addDecimal={this.addDecimal}
            openModal={this.openModal}
            reset={this.reset}
            isDateSet={!customDate.isSame(new Date(), 'day')}
            isSideExpense={side === SideEnum.Expense}
            isCommentSet={!!comment}
          />
        </View>
        <View style={styles(theme).saveButtonContainer}>
          <KSButton
            onPress={this.onSave}
            text="+ Add Expense"
            containerStyle={styles(theme).saveButton}
            textStyle={styles(theme).saveButtonText}
          />
        </View>
        <SubCategoryModal
          category={selectedCategory && categories.find(c => c.title === selectedCategory.title)}
          open={!!selectedCategory && !selectedSubCategory}
          onPickSubCategory={this.onSelectedSubCategoryChange}
          onClose={this.onSubCategoryModalClose}
          saveCategory={saveCategory}
        />
        <KSCurrencyPicker
          open={openModal === openModalEnum.currency}
          currency={currency}
          close={this.onCurrencyPickerClose}
        />
        <CommentsModal
          open={openModal === openModalEnum.comments}
          close={this.closeModal}
          onCommentChange={this.onCommentChange}
          comment={comment}
        />
        <DateModal
          open={openModal === openModalEnum.date}
          close={this.closeModal}
          onDateChange={this.onDateChange}
          date={customDate}
        />
        <SideModal
          side={side}
          open={openModal === openModalEnum.side}
          close={this.closeModal}
          onSideChange={this.onSideChange}
        />
      </View>
    );
  }

  private onSideChange = (side: SideEnum) => {
    this.setState({ side });
  }

  private onDateChange = (date: moment.Moment) => {
    this.setState({ customDate: date })
  };

  private openModal = (openModal: openModalEnum) => () => {
    this.setState({ openModal });
  }

  private closeModal = () => {
    this.setState({ openModal: undefined });
  }

  private onCurrencyPickerClose = (currency: ICurrency) => {
    this.setState({ openModal: undefined, currency });
  }

  private onCommentChange = (comment: string) => {
    this.setState({ comment });
  }

  private addChar = (character: string) => () => {
    const amount = this.state.amount + character;
    this.setState({ amount });
  };

  private deleteChar = () => {
    const amount = this.state.amount.slice(0, -1);
    this.setState({ amount });
  };

  private addDecimal = () => {
    const amount = this.state.amount.replace('.', '') + '.';
    this.setState({ amount });
  };

  private onSelectedCategoryChange = (newCategory?: ICategory) => {
    const selectedCategory = newCategory === this.state.selectedCategory ? undefined : newCategory;
    this.setState({ selectedCategory, selectedSubCategory: '' });
  };

  private onSelectedSubCategoryChange = (selectedSubCategory: string) => {
    this.setState({ selectedSubCategory });
  };

  private onSubCategoryModalClose = () => {
    this.setState({ selectedCategory: undefined, selectedSubCategory: '' });
  }

  private onSave = () => {
    const {
      amount,
      selectedCategory,
      selectedSubCategory,
      comment,
      customDate,
      side
    } = this.state;

    if (!amount) {
      alert('Enter an amount');
      return;
    }

    if (!selectedCategory || !selectedCategory.title || !selectedSubCategory) {
      alert('Enter a category before saving');
      return;
    }

    const creationDate = customDate.valueOf() || new Date().getTime();
    const amountToSave = (side === SideEnum.Income ? -1 : 1) * numeral(amount).value();

    this.props.addExpense({
      id: `${new Date().getTime()}`,
      amount: amountToSave,
      category: selectedCategory.title,
      subCategory: selectedSubCategory,
      createdAt: creationDate,
      updatedAt: creationDate,
      color: selectedCategory.color,
      comments: comment
    });

    this.reset();
  };

  private reset = () => {
    this.setState(this.getEmptyState());
  }

  private getEmptyState = () => {
    return {
      amount: '',
      selectedCategory: undefined,
      selectedSubCategory: '',
      openModal: undefined,
      currency: this.props.baseCurrency,
      comment: undefined,
      customDate: moment(),
      side: SideEnum.Expense
    };
  }
};

export default withTheme(Add);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  categories: {
    flex: 0.25
  },
  metadata: {
    flex: 0.20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  keyboard: {
    flex: 0.40
  },
  saveButtonContainer: {
    flex: 0.1,
    marginHorizontal: 30,
    marginBottom: 10
  },
  saveButton: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: theme.underlayColor,
    padding: 10,
    marginTop: 15
  },
  saveButtonText: {
    fontSize: 16,
    color: theme.textMainColor
  }
});
