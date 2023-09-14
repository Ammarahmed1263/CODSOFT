import { StyleSheet, View, StatusBar } from 'react-native';
import Greeting from '../components/Greeting';
import TaskContainer from '../components/taskContainer';

const Home = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <Greeting />
            <TaskContainer navigation={ navigation }/>
            <StatusBar barStyle='light-content' backgroundColor='#00AFB9'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#00AFB9',
    },
});

export default Home;