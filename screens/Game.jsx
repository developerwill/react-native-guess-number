import {useState} from "react";
import {Alert, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import RandNumBetween from "../functions/RandNumBetween";
import PrimaryBtn from "../components/ui/buttons/PrimaryBtn";

let minBoundary = 1;
let maxBoundary = 100;

export default function Game({userNumber}) {
    const [currentGuess, setCurrentGuess] = useState(RandNumBetween(minBoundary, maxBoundary, userNumber));

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                `Don't lie!`,
                'You know this is wrong...',
                [{text: 'Sorry!', style: 'cancel'}])
            return;
        }

        direction === 'lower' ? maxBoundary = currentGuess : minBoundary = currentGuess + 1;

        const newRndNum = RandNumBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
    }

    return (
        <View style={styles.screen}>
            <Title>Game Screen madafoca!</Title>
            <NumberContainer>{currentGuess}</NumberContainer>

            <View>
                <Text>Higher or lower?</Text>

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryBtn onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryBtn>
                    </View>

                    <View style={styles.button}>
                        <PrimaryBtn onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryBtn>
                    </View>
                </View>

            </View>

            <View>
                <Text>Game Screen!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    }
});