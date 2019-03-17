import React from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Modal, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputFocusEventData, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import KSIconPicker from '../../../../components/KSIconPicker';
import { ThemeType } from '../../../../constants/common';
import { ICategory, IThemeConstants } from '../../../../typings';
import { withTheme } from '../../../ThemeProvider/withTheme';

const ADD_BUTTON = 'ADD_BUTTON';

export interface ISubCategoryModalProps {
  category?: ICategory;
  onPickSubCategory: (item: string) => void;
  open: boolean;
  onClose: () => void;
  saveCategory: (oldTitle: string, categoryToSave: ICategory) => void;
  theme: IThemeConstants;
}

interface ISubCategoryModalState {
  isEditing: boolean;
  items: string[];
  title: string;
  isIconPickerOpen: boolean;
  icon: string;
  textinputEditIndex?: number;
  textinputEditValue: string;
}

class SubCategoryModal extends React.Component<ISubCategoryModalProps, ISubCategoryModalState> {
  constructor(props: ISubCategoryModalProps) {
    super(props);

    this.state = {
      isEditing: false,
      items: [],
      title: '',
      isIconPickerOpen: false,
      icon: '',
      textinputEditIndex: undefined,
      textinputEditValue: ''
    };
  }

  render() {
    const { category, open, theme } = this.props;
    const { isEditing, title, isIconPickerOpen, icon } = this.state;

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
        <View style={styles(theme).container}>
          <View style={styles(theme).backButtonContainer}>
            <TouchableHighlight onPress={this.close}>
              <Icon name="chevron-down" size={30} color={theme.underlayColor} />
            </TouchableHighlight>
            {
              isEditing ?
                <TouchableHighlight onPress={this.editIcon} style={styles(theme).icon}>
                  <Icon name={icon} size={30} color={category!.color} />
                </TouchableHighlight> :
                <View style={styles(theme).icon}>
                  <Icon name={category!.icon} size={30} color={category!.color} />
                </View>
            }
            {
              isEditing ?
                <TextInput
                  style={styles(theme).titleText}
                  value={title}
                  onChangeText={this.onTitleChange}
                  keyboardAppearance="light"
                  selectionColor={theme.textSecondaryColor}
                  selectTextOnFocus={true}
                /> :
                <Text style={styles(theme).titleText}>{category!.title}</Text>
            }
            <TouchableHighlight onPress={this.toggleEditMode} underlayColor={theme.underlayColor}>
              <Icon name={isEditing ? 'check-circle' : 'pencil'} size={30} color={theme.underlayColor} />
            </TouchableHighlight>
          </View>
          {isEditing ? this.renderEditView() : this.renderNonEditView()}
          <KSIconPicker
            open={isIconPickerOpen}
            close={this.closeIconPicker}
            icon={category!.icon}
          />
        </View>
      </Modal>
    );
  }

  private renderEditView = () => {
    const { items } = this.state;
    const { theme } = this.props;

    return <KeyboardAvoidingView style={styles(theme).root} behavior="padding" >
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={[...items, ADD_BUTTON]}
        numColumns={2}
        contentContainerStyle={styles(theme).list}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }: { item: string, index: number }) => (
          item === ADD_BUTTON && index === items.length ?
            this.renderAddButton() :
            this.renderEditButton({ item, index })

        )}
      />
    </KeyboardAvoidingView>;
  }

  private renderEditButton = ({ item, index }: { item: string, index: number }) => {
    const { category, theme } = this.props;
    const { textinputEditIndex, textinputEditValue } = this.state;

    return <View style={styles(theme).buttonContainer}>
      <View style={[styles(theme).buttonStyle, styles(theme).buttonStyleEdit, this.getButtonStyle(category!)]}>
        <TextInput
          selectTextOnFocus={true}
          style={[styles(theme).buttonText, this.getButtonTextStyle(category!)]}
          value={index !== textinputEditIndex ? item : textinputEditValue}
          onFocus={this.focusTextInput(index)}
          onBlur={this.blurTextInput(index)}
          onChangeText={this.onChangeText}
          keyboardAppearance="light"
          selectionColor={theme.type === ThemeType.Dark ? category!.color : theme.backgroundMainColor}
        />
        <TouchableHighlight onPress={this.onDelete(index)} style={styles(theme).deleteButton} underlayColor={theme.underlayColor}>
          <Icon name="close" size={25} color={theme.type === ThemeType.Dark ? category!.color : theme.backgroundMainColor} />
        </TouchableHighlight>
      </View>
    </View>
  };

  private renderAddButton = () => {
    const { category, theme } = this.props;

    return <TouchableHighlight style={styles(theme).buttonContainer} onPress={this.addItem}>
      <View style={[styles(theme).buttonStyle, this.getButtonStyle(category!)]}>
        <Text style={[styles(theme).buttonText, this.getButtonTextStyle(category!)]}>+ Add New</Text>
      </View>
    </TouchableHighlight>;
  }

  private renderNonEditView = () => {
    const { category, onPickSubCategory, theme } = this.props;
    const items = this.getSubCategories();

    return <FlatList
      data={items}
      numColumns={2}
      contentContainerStyle={styles(theme).list}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }: { item: string }) => (
        <TouchableHighlight
          onPress={() => onPickSubCategory(item)}
          style={styles(theme).buttonContainer}
          underlayColor={theme.backgroundMainColor}
        >
          <View style={[styles(theme).buttonStyle, this.getButtonStyle(category!)]}>
            <Text style={[styles(theme).buttonText, this.getButtonTextStyle(category!)]}>{item}</Text>
          </View>
        </TouchableHighlight>
      )}
    />;
  }

  private getButtonStyle = (category: ICategory) => {
    const { theme } = this.props;

    if (theme.type === ThemeType.Dark) {
      return { borderColor: category!.color, backgroundColor: theme.backgroundMainColor };
    } else {
      return { backgroundColor: category!.color, borderColor: category!.color };
    }
  }

  private getButtonTextStyle = (category: ICategory) => {
    const { theme } = this.props;

    if (theme.type === ThemeType.Dark) {
      return { color: category!.color };
    } else {
      return { color: theme.backgroundMainColor };
    }
  }

  private close = () => {
    if (this.state.isEditing) {
      this.promptBeforeSaving();
    } else {
      this.reset();
      this.props.onClose();
    }
  }

  private toggleEditMode = () => {
    const { category } = this.props;
    const { isEditing } = this.state;

    if (isEditing) {
      this.promptBeforeSaving();
    } else {
      this.setState({ isEditing: true, items: this.getSubCategories(), title: category!.title, icon: category!.icon });
    }
  }

  private promptBeforeSaving = () => {
    const { items, title, icon } = this.state;
    const { category } = this.props;

    Alert.alert(
      'Save',
      'Do you want to save the current configuration ?',
      [
        {
          text: 'Save',
          onPress: () => {
            this.reset();
            this.props.saveCategory(category!.title, { ...category!, subCategories: items, title, icon });
          },
          style: 'default'
        },
        {
          text: 'Undo Changes',
          onPress: () => {
            this.reset();
          },
          style: 'default'
        },
        {
          text: 'Keep on Modifying',
          onPress: () => { },
          style: 'default'
        }
      ]
    );
  }

  private reset = () => {
    this.setState({ isEditing: false, items: [], title: '' });
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

  private blurTextInput = (index: number) => (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const items = [...this.state.items];
    items[index] = e.nativeEvent.text;
    this.setState({ items, textinputEditIndex: undefined, textinputEditValue: '' });
  };

  private focusTextInput = (index: number) => () => {
    this.setState({ textinputEditIndex: index, textinputEditValue: this.state.items[index] });
  }

  private onChangeText = (value: string) => {
    this.setState({ textinputEditValue: value });
  }

  private onTitleChange = (title: string) => {
    this.setState({ title });
  }

  private editIcon = () => {
    this.setState({ isIconPickerOpen: true });
  }

  private closeIconPicker = (icon: string) => {
    this.setState({ isIconPickerOpen: false, icon });
  }
}

export default withTheme(SubCategoryModal);

const styles = (theme: IThemeConstants) => StyleSheet.create({
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
    paddingHorizontal: 15,
    backgroundColor: theme.backgroundMainColor
  },
  backButtonContainer: {
    paddingBottom: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: theme.underlayColor,
    borderBottomWidth: 1
  },
  icon: {
    marginLeft: 10,
    paddingHorizontal: 10
  },
  titleText: {
    marginLeft: 10,
    fontSize: 20,
    color: theme.textMainColor,
    marginBottom: 2,
    flex: 1
  },
  buttonContainer: {
    height: 70,
    width: '50%'
  },
  buttonText: {
    flexShrink: 1
  },
  buttonStyle: {
    flex: 1,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15,
    borderRadius: 3,
    padding: 10,
    borderWidth: 1
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
