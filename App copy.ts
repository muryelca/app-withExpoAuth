import React, { FunctionComponent } from 'react';
import { WebView } from 'react-native-webview';

const LoginWebView: FunctionComponent = () => (
  <WebView
    source={{ uri: 'https://mywebapp.com/login' }}
  />
);