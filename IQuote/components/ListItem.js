import { View, Text, StyleSheet, Alert } from "react-native"
import { useData } from "./StoreProvider";
import Button from './Button'


export default ListItem = ({ quoteInfo }) => {
    const { removeData, setIsFavorite } = useData();

    const removePermenant = () => {
        removeData(quoteInfo.id)
        setIsFavorite(false);
        Alert.alert('Removed permenantly');
    }

    return (
        <View style={styles.container}>
            <View style={styles.quoteContainer}>
                <Text style={styles.quote}>{ quoteInfo.content }</Text>
                <Text style={styles.author}>- { quoteInfo.author }</Text>
            </View>

            <Button name='ios-trash'
            color='#CF4444'
            size={30}
            style={styles.button}
            onPress={removePermenant}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#00E5E5',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 20,
        paddingBottom: 10
    },
    quoteContainer: {
        flex: .9
    },
    quote: {
        fontSize: 20,
        fontWeight: '400'
    },
    author: {
        alignSelf: 'flex-end',
        fontSize: 17,
        color: '#666',
        fontWeight: '600'
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'trasparent',
    }
})