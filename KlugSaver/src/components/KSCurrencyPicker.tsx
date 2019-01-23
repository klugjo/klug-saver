import React from 'react';
import { View, Text, Modal, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { ICurrency } from '../typings';
import { CURRENCIES_ARRAY } from '../constants/currencies';

export interface IKSCurrencyPickerProps {
  open: boolean;
  currency: ICurrency;
  close: (currency: ICurrency) => void;
}

class KSCurrencyPicker extends React.Component<IKSCurrencyPickerProps, {}> {
  public render() {
    const { open } = this.props;

    if (!open) {
      return null;
    }

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={open}
      >
        <View style={styles.container}>
          <FlatList
            data={CURRENCIES_ARRAY}
            renderItem={this.renderItem}
          />
        </View>
      </Modal>
    );
  }

  private renderItem = ({ item }: { item: ICurrency }) =>
    <TouchableHighlight onPress={this.pickCurrency(item)}>
      <Text>{item.name}</Text>
    </TouchableHighlight>;

  private pickCurrency = (item: ICurrency) => () => {
    this.props.close(item);
  }
}

export default KSCurrencyPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  messageText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30
  },
  buttons: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
  }
});
