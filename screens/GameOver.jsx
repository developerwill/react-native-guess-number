import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryBtn from "../components/ui/buttons/PrimaryBtn";

export default function GameOver() {
    return (
        <View style={styles.rootContainer}>
            <Title style={styles.title}>Game Over!</Title>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
            </View>

            <Text style={styles.summaryText}>
                You phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>X</Text>.
            </Text>

            <PrimaryBtn>Start New Game</PrimaryBtn>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textTransform: 'uppercase'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontWeight: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
});