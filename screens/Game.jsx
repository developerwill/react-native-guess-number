import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import RandNumBetween from "../functions/RandNumBetween";

export default function Game({userNumber}) {
    const [currentGuess] = useState(RandNumBetween(1, 100, userNumber));

    return (
        <View style={styles.screen}>
            <Title>Game Screen madafoca!</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Game Screen!</Text>
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
    }
});