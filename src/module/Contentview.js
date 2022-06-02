import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = {
    container: {
        flex: 1,
        marginTop: 50,
    },
};

const ContentView = () => {
    const webViewRef = useRef();

    return (
    <View style={styles.container}>
        <WebView
        ref={webViewRef}
        source={{ uri: 'http://besafefrontend.herokuapp.com/' }}
        originWhitelist={['*']}
        onNavigationStateChange={(state) => {
            const back = state.canGoBack;
            const foward = state.canGoForward;
            setCanGoBack(back);
            setCanGoFoward(foward);
        }}
        />
    </View>
);
};

export default ContentView;