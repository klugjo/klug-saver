import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { textStyleHeader, textStyleBase, dropShadow } from '../../theme/styles';
import { getTheme } from '../../theme/utils';
import { CloudBackup } from '../../typings';
import { KSButton } from '../../components';
import DropboxModal from './Components/DropboxModal';
import { BackupStrategy } from './Components/BackupStrategy';
import { SyncingButtons } from './Components/SyncingButtons';

interface ISettingsProps {
  dropboxToken?: string;
  saveDropboxToken: (token: string) => void;
  saveDropboxArchive: () => void;
  restoreDropboxArchive: () => void;
  saveBackupStrategy: (cloudBackup: CloudBackup) => void;
  cloudBackup: CloudBackup;
}

interface ISettingsState {
  dropboxModalOpen: boolean;
}

class Settings extends React.Component<ISettingsProps, ISettingsState> {

  constructor(props: ISettingsProps) {
    super(props);

    this.state = {
      dropboxModalOpen: false
    };
  }

  render() {
    const { dropboxToken, saveDropboxToken, cloudBackup } = this.props;
    const isDropboxLinked = !!dropboxToken;

    return <View style={styles.root}>
      <BackupStrategy
        cloudBackup={cloudBackup}
        saveBackupStrategy={this.saveBackupStrategy}
      />
      <SyncingButtons
        cloudBackup={cloudBackup}
        isDropboxLinked={isDropboxLinked}
        openDropboxModal={this.openDropboxModal}
        saveArchive={this.saveArchive}
        restoreArchive={this.restoreArchive}
      />
      <DropboxModal
        dropboxModalOpen={this.state.dropboxModalOpen}
        closeDropboxModal={this.closeDropboxModal}
        saveDropboxToken={saveDropboxToken}
      />
    </View>;
  }

  private openDropboxModal = () => {
    this.setState({ dropboxModalOpen: true });
  };

  private closeDropboxModal = () => {
    this.setState({ dropboxModalOpen: false });
  }

  private saveArchive = () => {
    this.props.saveDropboxArchive();
  }

  private restoreArchive = () => {
    this.props.restoreDropboxArchive();
  }

  private saveBackupStrategy = (cloudBackup: CloudBackup) => () => {
    this.props.saveBackupStrategy(cloudBackup);
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },

});

export default Settings;
