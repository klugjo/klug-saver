import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { KSButton } from '../../components';
import { getTheme } from '../../theme/utils';
import DropboxModal from './Components/DropboxModal';

const APP_CLIENT_ID = '4hksbxm1vxsyncq';
const CALLBACK_URL = 'https://www.codeblocq.com/';

interface ISettingsProps {
  dropboxToken?: string;
  saveDropboxToken: (token: string) => void;
  saveDropboxArchive: () => void;
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
        <Text>Dropbox Sync:</Text>
        {
          dropboxToken ?
            <View>
              <Text>Syncing. Dropbox Token : {dropboxToken}</Text>
              <View style={styles.buttons}>
                <KSButton
                  text="Save"
                  onPress={this.saveArchive}
                />
              </View>
            </View> :
            <View>
              <KSButton
                text="Sync"
                onPress={this.openDropboxModal}
              />
            </View>
        }

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
    backgroundColor: getTheme().backgroundMainColor,
    borderRadius: 5,
    margin: 20
  },
  buttons: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default Settings;
