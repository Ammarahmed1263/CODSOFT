import { View, Text, StyleSheet } from "react-native";

const HeadingText = () => {
    return (
        <View style={styles.innerContainer}>
            <Text style={styles.BoldText}>
                Tasks
                <Text style={styles.lightText}> List</Text>
            </Text>
            <View style={styles.rightLine}/>
        </View>
    )
}


export default HeadingText;

const styles = StyleSheet.create({
    innerContainer: {
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.15,
        marginTop: 15,
        marginBottom: -7
    },
    rightLine: {
        borderWidth: 1,
        borderColor: '#BBB',
        flex: 1,
        marginRight: 5
    },
    BoldText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginHorizontal: 30,
        marginBottom: 7,
        color: '#333'
    },
    lightText: {
        fontSize: 25,
        fontWeight: '400',
        color: '#777'
    }
})