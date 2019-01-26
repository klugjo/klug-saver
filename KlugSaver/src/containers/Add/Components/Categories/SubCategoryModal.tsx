import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput, Modal, Alert, FlatList, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ICategory } from '../../../../typings';
import { getTheme } from '../../../../theme/utils';

const ADD_BUTTON = 'ADD_BUTTON';

export interface ISubCategoryModalProps {
  category?: ICategory;
  onPickSubCategory: (item: string) => void;
  open: boolean;
  onClose: () => void;
  saveCategory: (oldTitle: string, categoryToSave: ICategory) => void;
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
            <TouchableHighlight onPress={this.toggleEditMode} underlayColor={getTheme().underlayColor}>
              <Icon name="pencil" size={30} color={getTheme().underlayColor} />
            </TouchableHighlight>
          </View>
          {isEditing ? this.renderEditView() : this.renderNonEditView()}
        </View>
      </Modal>
    );
  }

  private renderEditView = () => {
    const { items } = this.state;

    return <KeyboardAvoidingView style={styles.root} behavior="padding" >
      <FlatList
        data={[...items, ADD_BUTTON]}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }: { item: string, index: number }) => (
          item === ADD_BUTTON && index === items.length ?
            this.renderAddButton({ index }) :
            this.renderEditButton({ item, index })

        )}
      />
    </KeyboardAvoidingView>;
  }

  private renderEditButton = ({ item, index }: { item: string, index: number }) => {
    const { category } = this.props;

    return <View style={styles.buttonContainer}>
      <View style={[styles.buttonStyle, styles.buttonStyleEdit, { backgroundColor: category!.color }]} key={index}>
        <TextInput
          selectTextOnFocus={true}
          style={styles.buttonText}
          value={item}
          onChangeText={this.onChangeText(index)}
          keyboardAppearance="light"
          selectionColor={getTheme().backgroundMainColor}
        />
        <TouchableHighlight onPress={this.onDelete(index)} style={styles.deleteButton} underlayColor={getTheme().underlayColor}>
          <Icon name="close" size={25} color={getTheme().backgroundMainColor} />
        </TouchableHighlight>
      </View>
    </View>
  };

  private renderAddButton = ({ index }: { index: number }) => {
    const { category } = this.props;

    return <TouchableHighlight style={styles.buttonContainer} onPress={this.addItem} key={index}>
      <View style={[styles.buttonStyle, { backgroundColor: category!.color }]}>
        <Icon name="plus" size={30} color={getTheme().backgroundMainColor} />
      </View>
    </TouchableHighlight>;
  }

  private renderNonEditView = () => {
    const { category, onPickSubCategory } = this.props;

    const items = this.getSubCategories();

    return <FlatList
      data={items}
      numColumns={2}
      contentContainerStyle={styles.list}
      renderItem={({ item, index }: { item: string, index: number }) => (
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
      )}
    />;
  }

  private close = () => {
    if (this.state.isEditing) {
      this.promptBeforeSaving();
    } else {
      this.props.onClose();
    }
  }

  private toggleEditMode = () => {
    const { isEditing } = this.state;

    if (isEditing) {
      this.promptBeforeSaving();
    } else {
      this.setState({ isEditing: true, items: this.getSubCategories() });
    }
  }

  private promptBeforeSaving = () => {
    const { items } = this.state;
    const { category } = this.props;

    Alert.alert(
      'Save',
      'Do you want to save the current configuration ?',
      [
        {
          text: 'Save',
          onPress: () => {
            this.setState({ isEditing: false, items: [] });
            this.props.saveCategory(category!.title, { ...category!, subCategories: items });
          },
          style: 'default'
        },
        {
          text: 'Undo',
          onPress: () => {
            this.setState({ isEditing: false, items: [] });
          },
          style: 'cancel'
        },
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel'
        }
      ]
    );
  }

  private addItem = () => {
    this.setState({ items: [...this.state.items, 'Edit Me :)'] });
  }

  private getSubCategories = () => {
    const { category } = this.props;

    return !!category ? category.subCategories : [];
  }

  private onDelete = (index: number) => () => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  };

  private onChangeText = (index: number) => (value: string) => {
    const items = [...this.state.items];
    items[index] = value;
    this.setState({ items });
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
  },
  list: {
    paddingBottom: 50
  }
});
