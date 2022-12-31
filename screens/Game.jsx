import {useState, useEffect} from "react";
import {Alert, FlatList, StyleSheet, View} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import RandNumBetween from "../functions/RandNumBetween";
import PrimaryBtn from "../components/ui/buttons/PrimaryBtn";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

export default function Game({userNumber, onGameOver}) {
    const initialGuess = RandNumBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRounds((prevGuessRounds) => [newRndNum, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryBtn onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name={'md-remove'} size={24} color={'white'}></Ionicons>
                        </PrimaryBtn>
                    </View>

                    <View style={styles.button}>
                        <PrimaryBtn onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name={'md-add'} size={24} color={'white'}></Ionicons>
                        </PrimaryBtn>
                    </View>
                </View>
            </Card>

            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        marginTop: 12,
        padding: 12
    }
});