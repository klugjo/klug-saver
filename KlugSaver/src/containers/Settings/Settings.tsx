import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { textStyleHeader, textStyleBase } from '../../theme/styles';
import { getTheme } from '../../theme/utils';
import { CloudBackup } from '../../typings';
import { KSButton } from '../../components';
import DropboxModal from './Components/DropboxModal';

interface ISettingsProps {
  dropboxToken?: string;
  saveDropboxToken: (token: string) => void;
  saveDropboxArchive: () => void;
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
      <View style={styles.card}>
        <Text style={styles.title}>Cloud Backup Strategy:</Text>
        <View style={styles.radioButtons}>
          <TouchableHighlight
            style={[styles.radioButton, cloudBackup === CloudBackup.Phone ? styles.buttonSelected : null]}
            onPress={this.saveBackupStrategy(CloudBackup.Phone)}
            underlayColor={getTheme().accentMainColor}
          >
            <React.Fragment>
              <Icon name="cellphone-iphone" size={30} color={cloudBackup === CloudBackup.Phone ? getTheme().backgroundMainColor : getTheme().textMainColor} />
              <Text style={[styles.radioText, cloudBackup === CloudBackup.Phone ? styles.textSelected : null]}>Phone</Text>
            </React.Fragment>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.radioButton, cloudBackup === CloudBackup.Dropbox ? styles.buttonSelected : null]}
            onPress={this.saveBackupStrategy(CloudBackup.Dropbox)}
            underlayColor={getTheme().accentMainColor}
          >
            <React.Fragment>
              <Icon name="dropbox" size={30} color={cloudBackup === CloudBackup.Dropbox ? getTheme().backgroundMainColor : getTheme().textMainColor} />
              <Text style={[styles.radioText, cloudBackup === CloudBackup.Dropbox ? styles.textSelected : null]}>Dropbox</Text>
            </React.Fragment>
          </TouchableHighlight>
        </View>
        <View style={styles.buttons}>
          {!isDropboxLinked && <KSButton text="Link Account" onPress={this.openDropboxModal} />}
          {isDropboxLinked && <KSButton text="Backup" onPress={this.saveArchive} />}
          {isDropboxLinked && <KSButton text="Restore" onPress={this.openDropboxModal} containerStyle={{ marginLeft: 20 }} />}
        </View>
      </View>
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

  private saveBackupStrategy = (cloudBackup: CloudBackup) => () => {
    this.props.saveBackupStrategy(cloudBackup);
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  card: {
    borderRadius: 5,
    margin: 20
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
    justifyContent: 'flex-start',
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
    ...textStyleHeader
  }
});

export default Settings;
