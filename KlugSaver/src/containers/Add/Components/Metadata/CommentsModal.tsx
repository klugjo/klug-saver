import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { KSButton } from '../../../../components';
import { KSModal } from '../../../../components/KSModal';
import { IThemeConstants } from '../../../../typings';
import { withTheme } from '../../../ThemeProvider/withTheme';

export interface ICommentsModalProps {
  open: boolean;
  close: () => void;
  onCommentChange: (comment: string) => void;
  comment?: string;
  theme: IThemeConstants;
};

const CommentsModalBase = ({ open, close, onCommentChange, comment, theme }: ICommentsModalProps) => {
  return (
    <KSModal
      open={open}
      close={close}
      title="Comment"
    >
      <View style={styles(theme).rowInput}>
        <Icon name="comment-text-outline" size={40} color={theme.accentMainColor} />
        <View style={styles(theme).inputContainer}>
          <TextInput
            style={styles(theme).textInput}
            onChangeText={onCommentChange}
            value={comment}
            multiline={true}
            autoFocus={!comment ? open : false}
          />
          <View style={styles(theme).rowButtons}>
            <KSButton
              onPress={() => onCommentChange('')}
              text="Clear"
              containerStyle={styles(theme).button}
            />
            <KSButton
              onPress={close}
              text="Done"
              containerStyle={styles(theme).button}
            />
          </View>
        </View>
      </View>
    </KSModal>
  );
};

export const CommentsModal = withTheme(CommentsModalBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  rowInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  button: {
    marginHorizontal: 10
  },
  inputContainer: {
    marginLeft: 20,
    flex: 1,
    height: 160
  },
  textInput: {
    backgroundColor: theme.backgroundMainColor,
    color: theme.textMainColor,
    height: 100,
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.underlayColor
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
