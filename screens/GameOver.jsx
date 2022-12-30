import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

export default function GameOver() {
    return (
        <View style={styles.rootContainer}>
            <Title style={styles.title}>Game Over!</Title>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
            </View>

            <Text>You phone nedded X rounds to guess the number Y.</Text>
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
    }
});