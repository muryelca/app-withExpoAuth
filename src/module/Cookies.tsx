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
  CookieManager.set('http://besafefrontend.herokuapp.com/', {
    name: 'myCookie',
    value: 'myValue',
    domain: 'some domain',
    path: '/',
    version: '1'
  }).then((done) => {
    console.log('CookieManager.set =>', done);
  });
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
