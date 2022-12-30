import {StyleSheet, TextInput, View} from "react-native";
import PrimaryBtn from "../components/buttons/PrimaryBtn";

export default function StartGame() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType={'number-pad'}
                autoCorrect={false}
            />
            <PrimaryBtn>Reset</PrimaryBtn>
            <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});