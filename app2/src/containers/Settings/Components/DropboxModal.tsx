import { Dropbox } from 'dropbox';
import React from 'react';
import { NavState, StyleSheet, WebView } from 'react-native';
import { KSModal } from '../../../components/KSModal';
import { IThemeConstants } from '../../../typings';

const APP_CLIENT_ID = '4hksbxm1vxsyncq';
const CALLBACK_URL = 'https://www.codeblocq.com/';

export interface IDropboxModalProps {
  dropboxModalOpen: boolean;
  closeDropboxModal: () => void;
  saveDropboxToken: (token: string) => void;
};

class DropboxModal extends React.Component<IDropboxModalProps, {}> {

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
        this.props.closeDropboxModal();
        break;
      }
    }
  }

  private handleNavigationChange = (webviewState: NavState) => {
    const url = webviewState.url;

    if (this._lastURL !== url && url) {
      this._lastURL = url;
      const fragments = url.match(/(#.+)?$/);
      const fragment = fragments ? fragments[1] : '';
      if (fragment) {
        this.processAccessToken(fragment);
      }
    }
  }

  render() {
    const { dropboxModalOpen, closeDropboxModal } = this.props;
    const theme = this.context;

    return <KSModal
      open={dropboxModalOpen}
      title="Dropbox Account linking"
      close={closeDropboxModal}
    >
      <WebView
        source={{ uri: this.generateAuthorisationURL() }}
        style={styles(theme).webView}
        onNavigationStateChange={state => this.handleNavigationChange(state)}
      />
    </KSModal>
  }
};

export default DropboxModal;

const styles = (theme: IThemeConstants) => StyleSheet.create({
  webView: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%'
  }
});