import React from 'react';
import { View, Text, Modal, StyleSheet, Button } from 'react-native';
import { IExpense } from '../../typings';

interface IDeleteModalProps {
  open: boolean;
  expense?: IExpense;
  onCancel?: () => void;
  onDelete?: (id: string, from: string) => void;
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
        onRequestClose={this.onCancel}
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
              onPress={this.onCancel}
            />
          </View>
        </View>
      </Modal>
    );
  }

  private onDelete = () => {
    const { onDelete } = this.props;

    if (onDelete && typeof onDelete === 'function') {
      onDelete('', '');
    }
  }

  private onCancel = () => {
    const { onCancel } = this.props;

    if (onCancel && typeof onCancel === 'function') {
      onCancel();
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
    marginTop: 30,
    fontFamily: 'lato-thin'
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
