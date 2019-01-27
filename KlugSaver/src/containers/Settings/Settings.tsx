import React from 'react';
import { Dropbox } from 'dropbox';
import { StyleSheet, WebView, NavState, View, Text } from 'react-native';
import { KSButton } from '../../components';
import { getTheme } from '../../theme/utils';
import { KSModal } from '../../components/KSModal';

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

  private _lastURL: any;

  private generateAuthorisationURL = () => {
    const client = new Dropbox({ clientId: APP_CLIENT_ID, fetch } as any);
    return client.getAuthenticationUrl(CALLBACK_URL);
  }

  private processAccessToken = (fragment: string) => {
    const frag = fragment.replace(/^#/, "");
    const blocks = (frag || "").split("&");
    const blockNum = blocks.length;
    for (let i = 0; i < blockNum; i += 1) {
      const [key, value] = blocks[i].split("=");
      if (key === "access_token") {
        this.props.saveDropboxToken(value);
        this.closeDropboxModal();
        break;
      }
    }
  }

  private handleNavigationChange = (webviewState: NavState) => {
    const url = webviewState.url;

    console.log(url);

    if (this._lastURL !== url && url) {
      this._lastURL = url;
      const fragments = url.match(/(#.+)?$/);
      const fragment = fragments ? fragments[1] : '';
      if (fragment) {
        this.processAccessToken(fragment);
      }
    }
  }

  private saveArchive = () => {
    this.props.saveDropboxArchive();
  }

  render() {
    const { dropboxToken } = this.props;

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
      <KSModal
        open={this.state.dropboxModalOpen}
        title="Dropbox Account linking"
        close={this.closeDropboxModal}
      >
        <WebView
          source={{ uri: this.generateAuthorisationURL() }}
          style={styles.webView}
          onNavigationStateChange={state => this.handleNavigationChange(state)}
        />
      </KSModal>
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
    flex: 1,
    backgroundColor: getTheme().underlayColor
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
  },
  webView: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%'
  }
});

export default Settings;
