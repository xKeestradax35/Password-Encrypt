import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Pressable, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decryptText } from '../../api/encryption';
import { styles, theme } from '../../components/styles/Screens';
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../api/authentication';

export default function ItemsList() {
    const [items, setItems] = useState([])
    const navigation = useNavigation()
    const [x, setX] = useState(Dimensions.get('window').width / 1.5)

    navigation.setOptions({
        headerRight: () => (
            <Pressable
                onPress={()=>navigation.navigate('Add')}
                style={styles.fltButton}
            >
                <MaterialCommunityIcons name="plus" size={24} color="white" />
            </Pressable>
        ),
    });
    const removeItem = async (id) => {
        try {
            const newItems = items.filter((item) => item.id !== id);
            setItems(newItems);
            await AsyncStorage.setItem('items', JSON.stringify(newItems));
        } catch (error) {
            console.error(error);
        }
    };

    const returnDecryptText = (password) => {
        auth().then(e => {
            const decrypt = decryptText(password, 'yourkey') // replace 'yourkey' for a key to decrypt your password 
            navigation.navigate('Alert', { password: decrypt })
        })
    }

    const deleteAction = ({ id, password }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Pressable style={[styles.swpView, { backgroundColor: theme.light }]} onPress={() => returnDecryptText(password)}>
                    <MaterialCommunityIcons name='eye' size={24} color={'#fff'} />
                </Pressable>
                <Pressable style={styles.swpView} onPress={() => removeItem(id)}>
                    <MaterialCommunityIcons name='delete' size={24} color={'#fff'} />
                </Pressable>
            </View>

        )
    }

    useEffect(() => {
        // Load items from AsyncStorage on mount
        AsyncStorage.getItem('items').then((data) => {
            if (data !== null) {
                setItems(JSON.parse(data));
            }
        });
        if (x == 0) {
            setX(Dimensions.get('window').width / 1.5)
        }
    }, [items]);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <FlatList
                    data={items}
                    renderItem={({ item, index }) => (
                        <Swipeable key={index}
                            renderRightActions={() => deleteAction({ id: item.id, password: item.password })}
                        >
                            <Pressable style={styles.itListView} onPress={() => returnDecryptText(item.password)}>
                                <Text style={styles.itListAccountText}>{item.name}</Text>
                                <Text style={styles.itListAccountText}>{item.account}</Text>
                            </Pressable>
                        </Swipeable>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <StatusBar style='light'></StatusBar>
            </View>
        </SafeAreaView>
    )
}
