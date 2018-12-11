import React from 'react';
import { StyleSheet, WebView } from "react-native";

class Root extends React.Component {
  authenticate = () => {
    this.props.dropboxAuthenticate();
  }

  handleNavigationChange = (webviewState) => {
    console.log(webviewState.url);
  }

  render() {
    return <WebView
      source={{ uri: 'https://news.ycombinator.com/show' }}
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
