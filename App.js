import {ImageBackground, StyleSheet} from 'react-native';
import StartGame from "./screens/StartGame";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
            <ImageBackground
                style={styles.rootScreen}
                source={require('./assets/background.png')}
                resizeMode={'cover'}
                imageStyle={styles.imageBackground}
            >
                <StartGame/>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    imageBackground: {
        opacity: 0.15
    }
});
