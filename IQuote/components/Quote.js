import { Text, StyleSheet } from "react-native"

export default Quote = ({text, author}) => {
    return(
        <>
            <Text style={styles.quote}>{text}</Text>
            <Text style={styles.author}>- {author}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    quote: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FFF'
    },
    author: {
        fontSize: 20,
        alignSelf: 'flex-end',
        color: '#CCC',
        margin: 10,
    },
})