import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, TextInput } from 'react-native';
import { getTheme } from '../theme/utils';
import { KSModal } from './KSModal';
import { ICONS } from '../constants/icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export interface IKSIconPickerProps {
  open: boolean;
  icon: string;
  close: (icon: string) => void;
}

interface IKSIconPickerState {
  searchText: string;
}

class KSIconPicker extends React.Component<IKSIconPickerProps, IKSIconPickerState> {
  constructor(props: IKSIconPickerProps) {
    super(props);

    this.state = {
      searchText: ''
    };
  }

  public render() {
    const { open, icon } = this.props;
    const { searchText } = this.state;
    const icons = this.getIcons();

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
          <View style={{ height: 60, flexDirection: 'row' }}>
            <TextInput
              style={styles.buttonText}
              value={searchText}
              onChangeText={this.onSearchTextChange}
              keyboardAppearance="light"
              selectionColor={getTheme().textSecondaryColor}
              placeholder="Search ..."
            />
          </View>
          <FlatList
            data={icons}
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
    this.setState({ searchText: '' });
  }

  private onSearchTextChange = (searchText: string) => {
    this.setState({ searchText });
  }

  private getIcons = () => {
    const { searchText } = this.state;
    
    if (!searchText) {
      return ICONS;
    }

    const terms = searchText.trim().split(' ');

    return ICONS.filter(i => terms.every(t => i.indexOf(t.toLowerCase()) > -1));
  }
}

export default KSIconPicker;


const styles = StyleSheet.create({
  modalContainerOverride: {
    paddingHorizontal: 0
  },
  container: {
    flex: 1
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
  },
  buttonText: {
    color: getTheme().textSecondaryColor,
    flex: 1,
    height: 40,
    backgroundColor: getTheme().underlayColor,
    fontSize: 16,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginHorizontal: 15
  }
});
