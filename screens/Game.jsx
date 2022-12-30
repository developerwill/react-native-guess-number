import {StyleSheet, Text, View} from "react-native";

export default function Game() {
    return (
        <View style={styles.screen}>
            <Text>Game Screen!</Text>

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