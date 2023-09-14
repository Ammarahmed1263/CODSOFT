import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Checkbox = ({ checked, backgroundColor='#34B233', checkColor='white', checkSize=24, onPress }) => {
    return (
        <TouchableOpacity style={[styles.outline, { backgroundColor: checked ? backgroundColor : 'white' }]} onPress={onPress}>
            {checked && <Ionicons name="md-checkmark-sharp" size={checkSize} color={ checkColor } />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    outline: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: 37,
        height: 37,
        borderColor: '#666'
    }
})

export default Checkbox;