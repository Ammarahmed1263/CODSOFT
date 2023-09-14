import { View, StyleSheet, TouchableHighlight, Text, FlatList } from "react-native";
import HeadingText from "./tasksHeader";
import Task from "./Task";
import { useSelector } from "react-redux";


const renderItem = ({item: task}) => {
    return (
        <Task task={task}/>
    )
}

const TaskContainer = ({ navigation }) => {
        const { tasks } = useSelector((state) => state.taskReducer);

        return (
        <View style={styles.tasks}>
            <HeadingText />

            <View style={styles.buttonContainer}>
                <TouchableHighlight underlayColor='#005073' style={styles.taskOperations} onPress={() => {navigation.navigate('Task', {isEditing: false})}}>
                    <Text style={styles.taskTxt}>New Task</Text>
                </TouchableHighlight>
            </View>

            {tasks.length ? <FlatList 
            data={tasks}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            style={{flex: 1}}
            /> : <View style={styles.tempCont}>
                    <Text style={styles.tempText}>{"Woohoo! You’ve cleared your to-do list for the day! 🎉 Time to sit back, relax, and enjoy your well-deserved break. Remember, it’s just as important to rest and recharge as it is to be productive. So go ahead, read that book you’ve been meaning to get to, take a walk in the park, or simply enjoy a cup of your favorite beverage. You’ve earned it! 😊"}</Text>
                </View>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    tasks: {
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
      backgroundColor: '#EEE',
      flex: 1
    },
    buttonContainer: {
        flex: .1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: -1
    },
    taskOperations: {
        backgroundColor:'#0081A7',
        marginHorizontal: 10,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginTop: -20
    },
    taskTxt: {
        fontSize: 20,
        color: 'white',
        marginHorizontal: 10,
    },
    tempCont: {
        flex: 1,
        alignItems: 'center',
    },
    tempText: {
        fontSize: 27,
        fontWeight: 'bold',
        marginHorizontal: 13,
        marginTop: 10,
        textAlign: 'center',
        color: '#F07167',
    }
});

export default TaskContainer;