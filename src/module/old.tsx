import { StyleSheet, Text, View } from 'react-native'

import ContentView from './module/Contentview.js'
import CookieManager from '@react-native-community/cookies';

export default function App() {
    return (
        <View style={styles.container}>
            <ContentView />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
})