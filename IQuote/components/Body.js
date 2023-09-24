import { StyleSheet, ScrollView, View, Alert, Text } from "react-native";
import BodyFooter from "./BodyFooter";
import Quote from "./Quote";
import useFetch from "./useFetch";

export default function Body() {
    const categories = `Creativity|Future|Generosity|Inspirational|Motivational|Life|Technology|Friendship|Wisdom|Success`
        
    const url = `https://api.quotable.io/quotes/random?tags=${categories}`

    const { data, toggleReload } = useFetch(url);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {data &&
                <View style={styles.container}>
                    <Quote text={data[0]?.content} author={data[0]?.author}/>
                    
                    <BodyFooter reload={toggleReload} data={data[0]}/>
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        paddingHorizontal: 20,
        paddingVertical: 40,
        borderWidth: 8,
        borderRadius: 38,
        borderColor: '#00E5E5',
        marginTop: 50,
        marginBottom: 50
    },

})