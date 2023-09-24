import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default Button = ({name, size=22, color, style, onPress}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Ionicons name={name} size={size} color={color} />
        </TouchableOpacity>
    )
}
