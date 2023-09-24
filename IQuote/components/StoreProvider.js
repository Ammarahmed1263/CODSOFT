import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const StoreProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const getData = async () => {
        try {
            const oldData = await AsyncStorage.getItem('favorited');
            if(oldData) {
                const parsed = JSON.parse(oldData);
                setData(parsed);
                return parsed;
            } else {
                return [];
            }
        } catch (error) {
            console.log('Error in get data', error);
            return [];
        }
    }
    
    const saveData = async (data) => {
        try {
            const strData = JSON.stringify(data);
            await AsyncStorage.setItem('favorited', strData);
            setData(data);
        } catch (error) {
            console.log('Error in set data:', error)
        }
    }
    
    const removeData = async (id) => {
        try {
            const oldData = await getData()
            const newData = oldData.filter((item) => item.id !== id)
            await saveData(newData);
        } catch (error) {
            console.log('Error in remove item:', error)
        }
    }

    useEffect(() => {
        getData();
        console.log("data in provider:", data);
    }, [])
    
    return (
        <DataContext.Provider value={{getData, saveData, removeData, data, isFavorite, setIsFavorite}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);