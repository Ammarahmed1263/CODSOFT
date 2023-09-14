import { View, Text, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Checkbox from './Checkbox'
import { removeTask, toggleBox } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";


const Task = ({task}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    return (
        <View style={[styles.container, task.checkBox && styles.backgroundMarked]}>
            <View style={styles.checkPosition}>
                <Checkbox
                checked={task.checkBox}
                onPress={()=> dispatch(toggleBox(task.id))}
                />
            </View>
            
            <View style={styles.textContainer}>
                <Text style={[styles.taskHead, task.checkBox && styles.textMarked]}>{task.title}</Text>
                
                <Text style={[styles.taskBody, task.checkBox && styles.textMarked]}>{task.description}</Text>
            </View>
            
            <View style={styles.iconsContainer}>
                <Ionicons 
                style={styles.icon}
                name="create-outline"
                size={29}
                color="#EEE"
                onPress={() => navigation.navigate('Task', {isEditing: true, task: task})}
                />

                <Ionicons 
                style={styles.icon}
                name="trash-outline"
                size={28}
                color="#EEE"
                onPress={() => dispatch(removeTask(task.id))}
                />
            </View>
        </View>
    )
}


export default Task;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F07167',
        borderRadius: 20,
        marginHorizontal: 5,
        padding: 5,
        marginVertical: 10
    },
    checkPosition: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15
    },
    textContainer: {
        padding: 10,
        flex: .65,
    },
    taskHead: {
        fontSize: 23,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#EEE'
    },
    taskBody: {
        fontSize: 18,
        color: '#777',
        marginLeft: 4,
        color: '#DDD'
    },
    iconsContainer: {
        flexDirection: 'row',
        flex: .20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        margin: 5
    },
    backgroundMarked: {
        backgroundColor: '#FD9192'
    },
    textMarked: {
        textDecorationLine: 'line-through'
    }
})