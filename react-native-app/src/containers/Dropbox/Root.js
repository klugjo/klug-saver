import React from 'react';
import { Dropbox } from 'dropbox';
import { StyleSheet, WebView } from 'react-native';

const APP_CLIENT_ID = '4hksbxm1vxsyncq';
const CALLBACK_URL = 'https://www.codeblocq.com/';

class Root extends React.Component {
  authenticate = () => {
    this.props.dropboxAuthenticate();
  }

  generateAuthorisationURL = () => {
    const client = new Dropbox({ clientId: APP_CLIENT_ID, fetch });
    return client.getAuthenticationUrl(CALLBACK_URL);
  }

  processAccessToken = (fragment) => {
    const frag = fragment.replace(/^#/, "");
    const blocks = (frag || "").split("&");
    const blockNum = blocks.length;
    for (let i = 0; i < blockNum; i += 1) {
      const [key, value] = blocks[i].split("=");
      if (key === "access_token") {
        this.props.saveDropboxToken(value);
        console.log(`Savng Token: ${value}`);
        break;
      }
    }
  }

  handleNavigationChange = (webviewState) => {
    const url = webviewState.url;

    console.log(url);

    if (this._lastURL !== url) {
      this._lastURL = url;
      const fragment = url.match(/(#.+)?$/)[1] || "";
      this.processAccessToken(fragment);
    }
  }

  render() {
    return <WebView
      source={{ uri: this.generateAuthorisationURL() }}
      style={styles.webView}
      onNavigationStateChange={state => this.handleNavigationChange(state)}
    />;
  }
}

const styles = StyleSheet.create({
  webView: {
    display: 'flex',
    flex: 2,
    height: '100%',
    width: '100%'
  }
});

export default Root;
