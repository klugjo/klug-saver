import React from 'react';
import { Dropbox } from 'dropbox';
import { StyleSheet, WebView, NavState, View } from 'react-native';
import { KSButton } from '../../components';

const APP_CLIENT_ID = '4hksbxm1vxsyncq';
const CALLBACK_URL = 'https://www.codeblocq.com/';

interface IDropBoxProps {
  dropboxToken?: string;
  saveDropboxToken: (token: string) => void;
  saveDropboxArchive: () => void;
}

class DropBox extends React.Component<IDropBoxProps, {}> {

  private _lastURL: any;

  private generateAuthorisationURL = () => {
    const client = new Dropbox({ clientId: APP_CLIENT_ID, fetch });
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
        console.log(`Saving Token: ${value}`);
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
    return <View style={styles.root}>
      <View style={styles.buttons}>
        <KSButton
          text="Save"
          onPress={this.saveArchive}
        />
      </View>
      <WebView
        source={{ uri: this.generateAuthorisationURL() }}
        style={styles.webView}
        onNavigationStateChange={state => this.handleNavigationChange(state)}
      />
    </View>;
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
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

export default DropBox;
