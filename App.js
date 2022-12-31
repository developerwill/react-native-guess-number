import {useState} from "react";
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGame from "./screens/StartGame";
import {LinearGradient} from "expo-linear-gradient";
import Game from "./screens/Game";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import {useFonts} from "expo-font";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    const gameOverHandler = (numberOfRounds) => {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    const startNewGameHandler = () => {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGame onPickNumber={pickedNumberHandler}/>

    if (userNumber) screen = <Game userNumber={userNumber} onGameOver={gameOverHandler}/>

    if (gameIsOver && userNumber) screen = <GameOver userNumber={userNumber} rounds={guessRounds} onStartNewGame={startNewGameHandler}/>

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
