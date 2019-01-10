import React from 'react';
import { View, Text, Modal, StyleSheet, Button } from 'react-native';
import { IExpense } from '../../typings';
import { getRefreshDate } from '../../util';

interface IDeleteModalProps {
  open: boolean;
  expense?: IExpense;
  onClose?: () => void;
  onDelete?: (id: string, from: Date) => void;
}

class DeleteModal extends React.Component<IDeleteModalProps, {}> {
  public render() {
    const { open, expense } = this.props;

    if (!expense) {
      return null;
    }

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={open && !!expense}
        onRequestClose={this.onClose}
      >
        <View style={styles.container}>
          <View style={styles.labelContainer}>
            <Text style={styles.messageText}>
              {expense.category} - {expense.subCategory}
            </Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.messageText}>
              SGD {expense.amount}
            </Text>
          </View>

          <View style={styles.buttons}>
            <Button
              title="Delete"
              onPress={this.onDelete}
            />
            <Button
              title="Cancel"
              onPress={this.onClose}
            />
          </View>
        </View>
      </Modal>
    );
  }

  private onDelete = () => {
    const { onDelete, expense, onClose } = this.props;

    if (expense && onDelete && onClose) {
      onDelete(expense.id, getRefreshDate());
      onClose();
    }
  }

  private onClose = () => {
    const { onClose: onClose } = this.props;

    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  }
}

export default DeleteModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F1F5F5'
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
    backgroundColor: '#F1F5F5'
  }
});
