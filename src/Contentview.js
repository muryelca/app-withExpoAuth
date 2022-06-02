import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import NavigationView from './NavigationView';

const styles = {
    container: {
        flex: 1,
        marginTop: 50,
    },
};

const ContentView = () => {
    const webViewRef = useRef();
    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoFoward] = useState(false);
    const handleBackPress = () => {
        webViewRef.current.goBack();
    };
    const handleFowardPress = () => {
        webViewRef.current.goFoward();
    };

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