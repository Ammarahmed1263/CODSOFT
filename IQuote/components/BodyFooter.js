import { View, StyleSheet, Share, Alert } from "react-native";
import Button from "./Button";
import { useEffect } from "react";
import { useData } from "./StoreProvider";

export default BodyFooter = ({reload, data}) => {
    const { saveData, getData, removeData, isFavorite, setIsFavorite } = useData();
    
    useEffect(()=> {
        setIsFavorite(false);
    }, [data])

    const options = {
        message: `${data.content}\nBY ${data.author}`,
    }
    
    const share = async (options) => {
        try {
          result = await Share.share(options);
        } catch (err) {
          console.log(err);
        }
    };

    const handleStorage = async (isFavorite, quoteData) => {
        setIsFavorite(!isFavorite);

        const oldFavorited = await getData();
        let newQuote = { 
            id: quoteData._id, 
            content: quoteData.content,
            author: quoteData.author 
        };
        
        if (!isFavorite) {
            let newFavorited = [...oldFavorited, newQuote];
            saveData(newFavorited);
        } else {
            removeData(newQuote.id);
        }

        Alert.alert(`${!isFavorite ? 'Added to favorites' : 'Removed from favorites'} successfully`);
    }
    return (
        <View style={styles.overFlow}>
            <Button name='reload'
            color='#000'
            size={28}
            style={styles.button}
            onPress={reload}
            />

            <Button name={isFavorite ? 'heart' : 'heart-outline'}
            color={isFavorite ? '#C63D1F' : '#000'}
            size={40}
            onPress={() => handleStorage(isFavorite, data)}
            style={styles.center}/>
            
            <Button name='share-social'
            color='#000'
            size={28}
            style={styles.button}
            onPress={() => share(options)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    overFlow: {
        position: 'absolute',
        bottom: -35,
        right: 90,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00E5E5',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00E5E5',
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 15,
    },
})