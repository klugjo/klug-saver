import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { getTheme } from '../../../theme/utils';
import { dropShadow, textStyleBase } from '../../../theme/styles';
import { Icon } from 'react-native-vector-icons/Icon';
import { CloudBackup } from '../../../typings';
import { KSButton } from '../../../components';

export interface IBackupStrategyProps {
  cloudBackup: CloudBackup;
  saveBackupStrategy: (cloudBackup: CloudBackup) => () => void;
  isDropboxLinked: boolean;
  openDropboxModal: () => void;
  saveArchive: () => void;
  restoreArchive: () => void;
};

export const BackupStrategy = ({ cloudBackup, saveBackupStrategy, isDropboxLinked, openDropboxModal, saveArchive, restoreArchive }: IBackupStrategyProps) => {
  return <View style={styles.card}>
    <Text style={styles.title}>Backup Strategy</Text>
    <View style={styles.radioButtons}>
      <TouchableHighlight
        style={[styles.radioButton, cloudBackup === CloudBackup.Phone ? styles.buttonSelected : null]}
        onPress={saveBackupStrategy(CloudBackup.Phone)}
        underlayColor={getTheme().accentMainColor}
      >
        <React.Fragment>
          <Icon name="cellphone-iphone" size={30} color={cloudBackup === CloudBackup.Phone ? getTheme().backgroundMainColor : getTheme().textMainColor} />
          <Text style={[styles.radioText, cloudBackup === CloudBackup.Phone ? styles.textSelected : null]}>Phone</Text>
        </React.Fragment>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.radioButton, cloudBackup === CloudBackup.Dropbox ? styles.buttonSelected : null]}
        onPress={saveBackupStrategy(CloudBackup.Dropbox)}
        underlayColor={getTheme().accentMainColor}
      >
        <React.Fragment>
          <Icon name="dropbox" size={30} color={cloudBackup === CloudBackup.Dropbox ? getTheme().backgroundMainColor : getTheme().textMainColor} />
          <Text style={[styles.radioText, cloudBackup === CloudBackup.Dropbox ? styles.textSelected : null]}>Dropbox</Text>
        </React.Fragment>
      </TouchableHighlight>
    </View>
    {cloudBackup === CloudBackup.Dropbox && <View style={styles.buttons}>
      {!isDropboxLinked && <KSButton text="Link Account" onPress={openDropboxModal} />}
      {isDropboxLinked && <KSButton text="Backup" onPress={saveArchive} />}
      {isDropboxLinked && <KSButton text="Restore" onPress={restoreArchive} containerStyle={{ marginLeft: 20 }} />}
    </View>}
  </View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    margin: 20,
    padding: 15,
    backgroundColor: getTheme().backgroundMainColor,
    ...dropShadow
  },
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: getTheme().underlayColor
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10
  },
  radioButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 1
  },
  buttonSelected: {
    backgroundColor: getTheme().accentMainColor
  },
  textSelected: {
    color: getTheme().backgroundMainColor
  },
  radioText: {
    ...textStyleBase,
    color: getTheme().textMainColor
  },
  title: {
    ...textStyleBase
  }
});