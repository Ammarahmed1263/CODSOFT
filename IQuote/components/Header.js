import { View, StyleSheet } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



export default Header = ({iconBackgroundColor='transparent', iconSize=45, iconColor}) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>
            <Entypo.Button name='menu' size={iconSize}
            backgroundColor={iconBackgroundColor}
            color={iconColor}
            underlayColor='transparent'
            onPress={onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 3,
    },
    burgerButton: {
        overlayColor: 'transparent'
    }
})