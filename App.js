import {useState} from "react";
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGame from "./screens/StartGame";
import {LinearGradient} from "expo-linear-gradient";
import Game from "./screens/Game";
import Colors from "./constants/colors";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGame onPickNumber={pickedNumberHandler}/>

    if (userNumber) screen = <Game userNumber={userNumber}/>

    return (<LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground
            style={styles.rootScreen}
            source={require('./assets/background.png')}
            resizeMode={'cover'}
            imageStyle={styles.imageBackground}
        >
            <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
    </LinearGradient>);
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    }, imageBackground: {
        opacity: 0.15
    }
});
