import React from 'react';
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
import MetadataModal from './Components/Metadata/MetadataModal';
import KSCurrencyPicker from '../../components/KSCurrencyPicker';

export interface IAddProps {
  addExpense: (expense: IExpense) => void;
  baseCurrency: ICurrency;
}

interface IAddState {
  amount: string;
  selectedCategory?: ICategory;
  selectedSubCategory: string;
  customCurrency?: ICurrency;
  metadataModalOpen: boolean;
  currencyPickerOpen: boolean;
  currency: ICurrency
}

export default class Add extends React.Component<IAddProps, IAddState> {
  state = {
    amount: '',
    selectedCategory: undefined,
    selectedSubCategory: '',
    metadataModalOpen: false,
    currencyPickerOpen: false,
    currency: this.props.baseCurrency
  };

  render() {
    const {
      amount,
      selectedCategory,
      selectedSubCategory,
      metadataModalOpen,
      currencyPickerOpen,
      currency
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
            openMetadataModal={this.onCurrencyPickerOpen}
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
        <MetadataModal
          open={metadataModalOpen}
          onClose={this.onMetadataModalClose}
          onSave={this.onMetadataModalSave}
          defaultCurrencyCode={currency.code}
        />
        <KSCurrencyPicker
          open={currencyPickerOpen}
          currency={currency}
          close={this.onCurrencyPickerClose}
        />
      </View>
    );
  }

  private onMetadataModalOpen = () => {
    this.setState({ metadataModalOpen: true });
  }

  private onMetadataModalClose = () => {
    this.setState({ metadataModalOpen: false });
  }

  private onCurrencyPickerOpen = () => {
    this.setState({ currencyPickerOpen: true });
  }

  private onCurrencyPickerClose = (currency: ICurrency) => {
    this.setState({ currencyPickerOpen: false, currency });
  }

  private onMetadataModalSave = () => {
    this.setState({ metadataModalOpen: false });
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
