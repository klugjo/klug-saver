import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KSButton } from '../../../components';
import { KSCard } from '../../../components/KSCard';
import { CloudBackup, IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';

export interface ISyncingButtonsProps {
  cloudBackup: CloudBackup;
  isDropboxLinked: boolean;
  openDropboxModal: () => void;
  saveArchive: () => void;
  restoreArchive: () => void;
  theme: IThemeConstants;
}

const SyncingButtonsBase = ({
  cloudBackup,
  isDropboxLinked,
  openDropboxModal,
  saveArchive,
  restoreArchive,
  theme,
}: ISyncingButtonsProps) => {
  return (
    <KSCard text="SYNCING ACTIONS">
      {cloudBackup === CloudBackup.Dropbox && (
        <View style={styles(theme).buttons}>
          <KSButton
            text="Link Account"
            onPress={openDropboxModal}
            containerStyle={styles(theme).buttonContainer}
            textStyle={styles(theme).buttonText}
          />
          {isDropboxLinked && (
            <KSButton
              text="Backup"
              onPress={saveArchive}
              containerStyle={styles(theme).buttonContainer}
              textStyle={styles(theme).buttonText}
            />
          )}
          {isDropboxLinked && (
            <KSButton
              text="Restore"
              onPress={restoreArchive}
              containerStyle={styles(theme).buttonContainer}
              textStyle={styles(theme).buttonText}
            />
          )}
        </View>
      )}
    </KSCard>
  );
};

export const SyncingButtons = withTheme(SyncingButtonsBase);

const styles = (theme: IThemeConstants) =>
  StyleSheet.create({
    buttons: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonContainer: {
      borderWidth: 1,
      borderRadius: 3,
      borderColor: theme.underlayColor,
      padding: 10,
      marginTop: 15,
      marginHorizontal: 5,
    },
    buttonText: {
      fontSize: 16,
      color: theme.textMainColor,
    },
  });
