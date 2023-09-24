import { View, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import StarredList from '../components/StarredList'
import Header from '../components/Header'
import { useData } from '../components/StoreProvider';

export default Favorites = () => {
    const { data } = useData();

    useEffect(() => {
        console.log('data rendered:', data);
    }, [data])

    return (
        <View style={styles.container}>
            <Header iconColor='#FFF'/>
            <StarredList data={data}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222'
    }
})