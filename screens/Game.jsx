import {StyleSheet, Text, View} from "react-native";
import Title from "../components/Title";

export default function Game() {
    return (
        <View style={styles.screen}>
            <Title>Game Screen madafoca!</Title>

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