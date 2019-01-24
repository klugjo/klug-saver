import React from 'react';
import moment from 'moment';
import { View, StyleSheet } from 'react-native';
import numeral from 'numeral';

import VirtualKeyboard from './Components/VirtualKeyboard';
import Categories from './Components/Categories/Categories';
import AmountDisplay from './Components/AmountDisplay';
import { SubCategoryModal } from './Components/Categories/SubCategoryModal';
import { IExpense, ICategory, ICurrency } from '../../typings';
import { KSButton } from '../../components';
import MetadataDisplay from './Components/Metadata/MetadataDisplay';
import { CURRENCIES } from '../../constants/currencies';
import KSCurrencyPicker from '../../components/KSCurrencyPicker';
import { CommentsModal } from './Components/Metadata/CommentsModal';
import { DateModal } from './Components/Metadata/DateModal';

export interface IAddProps {
  addExpense: (expense: IExpense) => void;
  baseCurrency: ICurrency;
}

enum openModalEnum {
  currency,
  comments,
  date
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
}

export default class Add extends React.Component<IAddProps, IAddState> {
  state = {
    amount: '',
    selectedCategory: undefined,
    selectedSubCategory: '',
    openModal: undefined,
    currency: this.props.baseCurrency,
    comment: undefined,
    customDate: moment()
  };

  render() {
    const {
      amount,
      selectedCategory,
      selectedSubCategory,
      openModal,
      currency,
      comment,
      customDate
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.categories}>
          <Categories
            onPickCategory={this.onSelectedCategoryChange}
            selectedCategory={selectedCategory}
          />
        </View>
        <View style={styles.metadata}>
          <MetadataDisplay
            currency={CURRENCIES.AUD}
            isCustomCurrency={true}
            isCredit={false}
            hasComment={true}
            hasCustomDate={false}
            openMetadataModal={this.openModal(openModalEnum.date)}
          />
          <AmountDisplay amount={amount} currency={currency} />
        </View>
        <View style={styles.keyboard}>
          <VirtualKeyboard
            addChar={this.addChar}
            deleteChar={this.deleteChar}
            addDecimal={this.addDecimal}
          />
        </View>
        <KSButton
          onPress={this.onSave}
          text="SAVE"
          containerStyle={styles.saveButton}
          textStyle={styles.saveButtonText}
        />
        <SubCategoryModal
          category={selectedCategory}
          open={!!selectedCategory && !selectedSubCategory}
          onPickSubCategory={this.onSelectedSubCategoryChange}
          onClose={this.onSubCategoryModalClose}
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
      </View>
    );
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
    this.setState({ comment })
  }

  addChar = (character: string) => () => {
    const amount = this.state.amount + character;
    this.setState({ amount });
  };

  deleteChar = () => {
    const amount = this.state.amount.slice(0, -1);
    this.setState({ amount });
  };

  addDecimal = () => {
    const amount = this.state.amount.replace('.', '') + '.';
    this.setState({ amount });
  };

  onSelectedCategoryChange = (newCategory?: ICategory) => {
    const selectedCategory = newCategory === this.state.selectedCategory ? undefined : newCategory;
    this.setState({ selectedCategory, selectedSubCategory: '' });
  };

  onSelectedSubCategoryChange = (selectedSubCategory: string) => {
    this.setState({ selectedSubCategory });
  };

  onSubCategoryModalClose = () => {
    this.setState({ selectedCategory: undefined, selectedSubCategory: '' });
  }

  onSave = () => {
    const { amount, selectedCategory, selectedSubCategory } = this.state;

    if (!amount) {
      alert('Enter an amount');
      return;
    }

    if (!selectedCategory || !selectedCategory.title || !selectedSubCategory) {
      alert('Enter a category before saving');
      return;
    }

    this.props.addExpense({
      id: `${new Date().getTime()}`,
      amount: numeral(amount).value(),
      category: selectedCategory.title,
      subCategory: selectedSubCategory,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    });

    this.setState({ amount: '', selectedCategory: undefined, selectedSubCategory: '' });
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  categories: {
    flex: 0.25
  },
  metadata: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  keyboard: {
    flex: 0.35
  },
  saveButton: {
    flex: 0.1,
    marginHorizontal: 30,
    marginBottom: 10
  },
  saveButtonText: {
    fontSize: 20
  }
});
