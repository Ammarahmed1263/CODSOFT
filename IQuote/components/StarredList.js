import { FlatList, View, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const ListHeader = () => {
    return (
        <Text style={styles.header}>Favorited</Text>
    )
}

export default function StarredList({data}) {

    return (
        <View style={styles.listItems}>
            <FlatList
            data={data.reverse()}
            renderItem={({item, index}) => <ListItem quoteInfo={item} key={index + item}/>}
            showsVerticalScrollIndicator={false}
            style={styles.flatList}
            ListHeaderComponent={ListHeader}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    listItems: {
        flex: 1,
    },
    header: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 20
    }
})