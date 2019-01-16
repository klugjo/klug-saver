import React from 'react';
import { View, StyleSheet, Modal, Text, Picker } from 'react-native';
import { IExpense, ICurrency } from '../../../../typings';
import { textStyleHeader } from '../../../../theme/styles';
import { CURRENCIES_ARRAY, CURRENCIES } from '../../../../constants/currencies';

export interface IMetadataModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (expense: IExpense) => void;
  defaultCurrencyCode: string;
};

interface IMetadataModalState {
  currency?: ICurrency;
}

class MetadataModal extends React.Component<IMetadataModalProps, IMetadataModalState> {

  constructor(props: IMetadataModalProps) {
    super(props);

    this.state = {
      currency: CURRENCIES[props.defaultCurrencyCode]
    };
  }

  render() {
    const { open, defaultCurrencyCode } = this.props;
    const {
      currency
    } = this.state;

    if (!open) {
      return null;
    }

    return <Modal
      animationType="slide"
      transparent={false}
      visible={open}
    >
      <View style={styles.root}>
        <View style={styles.section}>
          <Text style={styles.title}>Currency:</Text>
          <Picker
            selectedValue={currency ? currency.code : defaultCurrencyCode}
            style={{ height: 50, width: 100 }}
            onValueChange={this.onCurrencyChange}
          >
            {CURRENCIES_ARRAY.map((c: ICurrency) => 
              <Picker.Item label={c.name} value={c.code} />
            )}
          </Picker>
        </View>
      </View>
    </Modal>;
  }

  private onCurrencyChange = (_: string, itemIndex: number) => {
    this.setState({ currency: CURRENCIES_ARRAY[itemIndex] });
  }
};

export default MetadataModal;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-around'
  },
  section: {

  },
  title: {
    ...textStyleHeader
  }
});