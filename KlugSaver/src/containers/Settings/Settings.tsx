import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getTheme } from '../../theme/utils';
import DropboxModal from './Components/DropboxModal';
import { textStyleHeader, textStyleBase } from '../../theme/styles';
import { CloudBackup } from '../../typings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ISettingsProps {
  dropboxToken?: string;
  saveDropboxToken: (token: string) => void;
  saveDropboxArchive: () => void;
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

  private saveArchive = () => {
    this.props.saveDropboxArchive();
  }

  render() {
    const { dropboxToken, saveDropboxToken } = this.props;

    return <View style={styles.root}>
      <View style={styles.card}>
        <Text style={styles.title}>Cloud Backup Strategy:</Text>
        <View style={styles.radioButtons}>
          <View style={[styles.radioButton, styles.buttonSelected]}>
            <Icon name="cellphone-iphone" size={30} color={getTheme().backgroundMainColor} />
            <Text style={[styles.radioText, styles.textSelected]}>Phone</Text>
          </View>
          <View style={styles.radioButton}>
            <Icon name="dropbox" size={30} color={getTheme().textMainColor} />
            <Text style={styles.radioText}>Dropbox</Text>
          </View>
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
