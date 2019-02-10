import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Image } from 'react-native';
import { getTheme } from '../theme/utils';
import { KSModal } from './KSModal';
import { ICONS } from '../constants/icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export interface IKSIconPickerProps {
  open: boolean;
  icon: string;
  close: (icon: string) => void;
}

class KSIconPicker extends React.Component<IKSIconPickerProps, {}> {
  public render() {
    const { open, icon } = this.props;

    if (!open) {
      return null;
    }

    return (
      <KSModal
        open={open}
        title="Choose an Icon"
        close={this.pickIcon(icon)}
        containerStyle={styles.modalContainerOverride}
      >
        <View style={styles.container}>
          <FlatList
            data={ICONS}
            renderItem={this.renderItem}
            keyExtractor={item => item}
          />
        </View>
      </KSModal>
    );
  }

  private renderItem = ({ item }: { item: string }) => {
    const { icon } = this.props;
    const selectedStyle = icon === item && styles.selected;

    return <TouchableHighlight key={item} onPress={this.pickIcon(item)}>
      <View style={[styles.item, selectedStyle]}>
        <Icon name={item} size={20} color={getTheme().textMainColor} />
        <Text style={[styles.itemNameText, selectedStyle]}>{item}</Text>
      </View>
    </TouchableHighlight>;
  }

  private pickIcon = (item: string) => () => {
    this.props.close(item);
  }
}

export default KSIconPicker;


const styles = StyleSheet.create({
  modalContainerOverride: {
    paddingHorizontal: 0
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
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
  itemNameText: {
    fontSize: 16,
    marginLeft: 15,
    fontFamily: getTheme().fontThin
  }
});
