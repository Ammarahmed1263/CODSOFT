import { View, Text,StyleSheet } from "react-native";

const Greeting = () => {
    return (
        <View style={styles.greetContainer}>
            <Text style={styles.greet}>What's up!</Text>
        </View>
    )
}

export default Greeting;

const styles = StyleSheet.create({
    greetContainer: {
        backgroundColor: '#00AFB9',
        flex: 0.28,
    },
    greet: {
        alignSelf: 'flex-start',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 11,
        marginTop: 7,
        color: '#EDFEFF',
    }
})