import { StyleSheet, View } from "react-native";
import Body from "../components/Body";
import Header from '../components/Header';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header iconColor='#FFF'/>
            <Body />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222'
    },
  });