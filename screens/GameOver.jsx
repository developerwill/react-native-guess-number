import {Image, StyleSheet, Text, View, useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryBtn from "../components/ui/buttons/PrimaryBtn";

export default function GameOver({rounds, userNumber, onStartNewGame}) {
    const {width, height} = useWindowDimensions();

    let imageWidth = 200;
    let imageHeight = 300

    if (width < 380) {
        imageWidth = 150;
        imageHeight = 300;
    }

    if (height < 400) {
        imageWidth = '80%';
        imageHeight = 100;
    }

    const imageStyle = {
        width: imageWidth,
        height: imageHeight,
        borderRadius: imageHeight / 2
    }

    return (
        <View style={styles.rootContainer}>
            <Title style={styles.title}>Game Over!</Title>

            <View style={[styles.imageContainer, imageStyle]}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
            </View>

            <Text style={styles.summaryText}>
                You phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the
                number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>

            <PrimaryBtn onPress={onStartNewGame}>Start New Game</PrimaryBtn>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
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
        /*width: deviceWidth < 380 ? 150 : 200,
        height: deviceWidth < 380 ? 250 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,*/
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