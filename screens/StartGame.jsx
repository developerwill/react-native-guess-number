import {useState} from "react";
import {Alert, StyleSheet, TextInput, useWindowDimensions, View} from "react-native";
import PrimaryBtn from "../components/ui/buttons/PrimaryBtn";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGame({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    const numberInputHandler = (enteredText) => setEnteredNumber(enteredText);
    const resetInputHandler = () => setEnteredNumber('');

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }

    const {height} = useWindowDimensions();
    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType={'number-pad'}
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryBtn onPress={resetInputHandler}>Reset</PrimaryBtn>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryBtn onPress={confirmInputHandler}>Confirm</PrimaryBtn>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});