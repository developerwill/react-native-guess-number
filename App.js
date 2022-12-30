import {useState} from "react";
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGame from "./screens/StartGame";
import {LinearGradient} from "expo-linear-gradient";
import Game from "./screens/Game";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if(!fontsLoaded) return <AppLoading/>

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    const gameOverHandler = () => {
        setGameIsOver(true);
    }

    let screen = <StartGame onPickNumber={pickedNumberHandler}/>

    if (userNumber) screen = <Game userNumber={userNumber} onGameOver={gameOverHandler}/>

    if (gameIsOver && userNumber) screen = <GameOver/>

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
