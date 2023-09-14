import { TextInput, View, StyleSheet,Text, TouchableOpacity,
Keyboard, TouchableWithoutFeedback, StatusBar, Alert } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addTask, updateDesc, updateTitle, editTask } from "../redux/actions";
import { useEffect } from "react";


const TaskScreen = ({ navigation, route }) => {
    const { title, description } = useSelector((state) => state.inputReducer)
    const dispatch = useDispatch();
    const isEditing = route.params?.isEditing;
    const existingTask = route.params?.task;

    useEffect(() => {
        if (isEditing && existingTask) {
            dispatch(updateTitle(existingTask.title))
            dispatch(updateDesc(existingTask.description))
        } else {
            dispatch(updateTitle(''));
            dispatch(updateDesc(''));
        }
    }, [isEditing, existingTask])

    const handleSubmit = () => {
        let action = '';
        if (isEditing) {
            dispatch(editTask(title, description, existingTask.id))
            action = 'updated';
        } else {
            dispatch(addTask(title, description));
            action = 'added';
        }
        Alert.alert(`task ${action} successfully`);
        navigation.goBack();
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container} >
                <StatusBar barStyle='light-content' backgroundColor='#F07167'/>
                <Text style={styles.boxHeading}>{isEditing ? 'Editing Task': 'Adding Task'}</Text>
                <View style={styles.borderContainer}>
                    <TextInput
                    placeholder='Title'
                    placeholderTextColor='#AAA'
                    style={styles.titleInput}
                    value={title}
                    onChangeText={(title) => dispatch(updateTitle(title))}
                    />
                    
                    <TextInput
                    placeholder='Description(optional)'
                    placeholderTextColor='#AAA'
                    multiline={true}
                    numberOfLines={3}
                    style={[styles.titleInput, {textAlignVertical: 'top'}]}
                    value={description}
                    onChangeText={(desc) => dispatch(updateDesc(desc))}
                    />
                    
                    <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>{isEditing ? 'Edit' : 'Add'}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00AFB9'
    },
    borderContainer: {
        borderRadius: 40,
        width: 350,
        height: 290,
        padding: 40,
        backgroundColor: '#EEE'
    },
    titleInput: {
        borderBottomWidth: 2,
        borderColor: '#DDD',
        fontSize: 20,
        marginBottom: 20,
        paddingVertical: 2,
    },
    confirmButton: {
        backgroundColor:'#0081A7',
        alignSelf: 'center',
        borderRadius: 7,
        marginTop: 10
    },
    buttonText: {
        fontSize: 22,
        color: '#EEE',
        marginHorizontal: 25,
        marginVertical: 10
    },
    boxHeading: {
        fontSize: 25,
        backgroundColor: '#F07167',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
        color: '#EEE'
    }
})

export default TaskScreen;