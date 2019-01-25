import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput, Modal } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ICategory } from '../../../../typings';
import { getTheme } from '../../../../theme/utils';

export interface ISubCategoryModalProps {
  category?: ICategory;
  onPickSubCategory: (item: string) => void;
  open: boolean;
  onClose: () => void;
}

interface ISubCategoryModalState {
  isEditing: boolean;
  items: string[];
}

class SubCategoryModal extends React.Component<ISubCategoryModalProps, ISubCategoryModalState> {
  constructor(props: ISubCategoryModalProps) {
    super(props);

    this.state = {
      isEditing: false,
      items: []
    };
  }

  render() {
    const { category, open } = this.props;
    const { isEditing } = this.state;

    const items = this.getSubCategories();

    if (!items || !items.length || !open) {
      return null;
    }

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={open}
      >
        <View style={styles.container}>
          <View style={styles.backButtonContainer}>
            <TouchableHighlight onPress={this.close}>
              <Icon name="close" size={30} color={getTheme().underlayColor} />
            </TouchableHighlight>
            <Text style={styles.titleText}>{category!.title}</Text>
            <TouchableHighlight onPress={this.toggleEditMode}>
              <Icon name="pencil" size={30} color={getTheme().underlayColor} />
            </TouchableHighlight>
          </View>
          {isEditing ? this.renderEditView() : this.renderNonEditView()}
        </View>
      </Modal>
    );
  }

  private renderEditView = () => {
    const { category } = this.props;
    const { items } = this.state;

    return <KeyboardAwareScrollView contentContainerStyle={styles.root} extraScrollHeight={50}>
      {
        items.map((item, index) => (
          <View
            key={index}
            style={styles.buttonContainer}
          >
            <View style={[styles.buttonStyle, styles.buttonStyleEdit, { backgroundColor: category!.color }]}>
              <TextInput selectTextOnFocus={true} style={styles.buttonText}>{item}</TextInput>
              <TouchableHighlight onPress={this.onDelete(index)} style={styles.deleteButton}>
                <Icon name="close" size={25} color={getTheme().backgroundMainColor} />
              </TouchableHighlight>
            </View>
          </View>
        ))
      }
      <TouchableHighlight style={styles.buttonContainer} onPress={this.addItem}>
        <View style={[styles.buttonStyle, { backgroundColor: category!.color }]}>
          <Icon name="plus-box-outline" size={25} color={getTheme().backgroundMainColor} />
        </View>
      </TouchableHighlight>
    </KeyboardAwareScrollView>;
  }

  private renderNonEditView = () => {
    const { category, onPickSubCategory } = this.props;

    const items = this.getSubCategories();

    return <View style={styles.root}>
      {
        items.map((item, index) => (
          <TouchableHighlight
            key={index}
            onPress={() => onPickSubCategory(item)}
            style={styles.buttonContainer}
            underlayColor={getTheme().backgroundMainColor}
          >
            <View style={[styles.buttonStyle, { backgroundColor: category!.color }]}>
              <Text style={styles.buttonText}>{item}</Text>
            </View>
          </TouchableHighlight>
        ))
      }
    </View>;
  }

  private close = () => {
    this.setState({ isEditing: false, items: [] });
    this.props.onClose();
  }

  private toggleEditMode = () => {
    const { isEditing } = this.state;

    if (isEditing) {
      this.setState({ isEditing: false, items: [] });
    } else {
      this.setState({ isEditing: true, items: this.getSubCategories() });
    }
  }

  private addItem = () => {
    this.setState({ items: [...this.state.items, 'Edit Me :)'] });
  }

  private getSubCategories = () => {
    const { category } = this.props;

    return !!category ? category.subCategories : [];
  }

  private onDelete = (index: number) => () => {

  };
}

export default SubCategoryModal;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 30,
    paddingHorizontal: 15
  },
  backButtonContainer: {
    paddingBottom: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1
  },
  titleText: {
    marginLeft: 30,
    fontSize: 18,
    color: getTheme().textSecondaryColor,
    marginBottom: 2,
    flex: 1
  },
  buttonContainer: {
    height: 90,
    width: '50%'
  },
  buttonText: {
    color: getTheme().backgroundMainColor,
    flexShrink: 1
  },
  buttonStyle: {
    flex: 1,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    padding: 10
  },
  buttonStyleEdit: {
    justifyContent: 'space-between'
  },
  deleteButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
