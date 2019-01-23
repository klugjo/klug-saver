import React from 'react';
import { View, Text, Modal, StyleSheet, FlatList, TouchableHighlight, Image } from 'react-native';
import { ICurrency } from '../typings';
import { CURRENCIES_ARRAY } from '../constants/currencies';
import { getTheme } from '../theme/utils';
import { flags } from '../constants/flags';

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
            keyExtractor={(item) => item.code}
          />
        </View>
      </Modal>
    );
  }

  private renderItem = ({ item }: { item: ICurrency }) => {
    const { currency } = this.props;
    const selectedStyle = currency.code === item.code && styles.selected;

    return <TouchableHighlight key={item.code} onPress={this.pickCurrency(item)}>
      <View style={[styles.item, selectedStyle]}>
        <Image
          style={styles.flag}
          source={{uri: `data:image/png;base64,${flags[item.code]}`}}
        />
        <Text style={[styles.itemCodeText, selectedStyle]}>{item.code}</Text>
        <Text style={[styles.itemNameText, selectedStyle]}>{item.name}</Text>
      </View>
    </TouchableHighlight>;
  }

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
  item: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: getTheme().underlayColor
  },
  selected: {
    backgroundColor: getTheme().accentMainColor,
    color: getTheme().backgroundMainColor
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 25
  },
  itemCodeText: {
    fontSize: 16,
    width: 60
  },
  itemNameText: {
    fontSize: 16
  }
});
