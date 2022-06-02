import * as React from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { NativeSyntheticEvent } from 'react-native';
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes';
import CookieManager from '@react-native-community/cookies';

const CHECK_COOKIE: string = `
  ReactNativeWebView.postMessage("Cookie: " + document.cookie);
  true;
`;

const onNavigationStateChange = (navigationState: WebViewNavigation) => {
  if (webViewRef.current) {
    webViewRef.current.injectJavaScript(CHECK_COOKIE);
  }
};

const onMessage = (event: NativeSyntheticEvent<WebViewMessage>) => {
  const { data } = event.nativeEvent;
  CookieManager.get('http://besafefrontend.herokuapp.com/');
}

let webViewRef = React.createRef<WebView>();
const LoginWebView: React.FunctionComponent = () => (
  <WebView
    ref={webViewRef}
    source={{ uri: 'http://besafefrontend.herokuapp.com/' }}
    onNavigationStateChange={onNavigationStateChange}
    onMessage={onMessage}
    sharedCookiesEnabled
  />
);
