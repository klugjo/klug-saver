import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTheme } from '../../../../theme/utils';
import { KSModal } from '../../../../components/KSModal';
import { KSButton } from '../../../../components';

export interface ICommentsModalProps {
  open: boolean;
  close: () => void;
  onCommentChange: (comment: string) => void;
  comment?: string;
};

export const CommentsModal = ({ open, close, onCommentChange, comment }: ICommentsModalProps) => {
  return (
    <KSModal
      open={open}
      close={close}
      title="Comment"
    >
      <View style={styles.rowInput}>
        <Icon name="comment-text-outline" size={40} color={getTheme().accentMainColor} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={onCommentChange}
            value={comment}
            multiline={true}
            autoFocus={!comment ? open : false}
          />
          <View style={styles.rowButtons}>
            <KSButton
              onPress={() => onCommentChange('')}
              text="Clear"
              containerStyle={styles.button}
              />
            <KSButton
              onPress={close}
              text="Done"
              containerStyle={styles.button}
            />
          </View>
        </View>
      </View>
    </KSModal>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: getTheme().backgroundMainColor,
    color: getTheme().textMainColor,
    height: 100,
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: getTheme().underlayColor
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
