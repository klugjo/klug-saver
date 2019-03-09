import React from 'react';
import { View, StyleSheet } from 'react-native';
import { KSCard } from '../../../components/KSCard';
import { KSButton } from '../../../components';
import { CloudBackup } from '../../../typings';
import { getTheme } from '../../../theme/utils';

export interface ISyncingButtonsProps {
  cloudBackup: CloudBackup;
  isDropboxLinked: boolean;
  openDropboxModal: () => void;
  saveArchive: () => void;
  restoreArchive: () => void;
};

export const SyncingButtons = ({ cloudBackup, isDropboxLinked, openDropboxModal, saveArchive, restoreArchive }: ISyncingButtonsProps) => {
  return <KSCard text="SYNCING ACTIONS">
    {cloudBackup === CloudBackup.Dropbox && <View style={styles.buttons}>
      {!isDropboxLinked && <KSButton text="Link Account" onPress={openDropboxModal} containerStyle={styles.buttonContainer} textStyle={styles.buttonText} />}
      {isDropboxLinked && <KSButton text="Backup" onPress={saveArchive} containerStyle={styles.buttonContainer} textStyle={styles.buttonText} />}
      {isDropboxLinked && <KSButton text="Restore" onPress={restoreArchive} containerStyle={styles.buttonContainer} textStyle={styles.buttonText} />}
    </View>}
  </KSCard>
};

const styles = (theme: IThemeConstants) => StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
  },
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: theme.underlayColor,
    padding: 10,
    marginTop: 15,
    marginHorizontal: 5
  },
  buttonText: {
    fontSize: 16,
    color: theme.textMainColor
  }
});