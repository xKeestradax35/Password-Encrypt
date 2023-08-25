import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Keyboard, KeyboardAvoidingView, Modal, Platform, Pressable, SafeAreaView, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from '../styles/Screens'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encryptText } from '../../api/encryption'
import { useNavigation } from '@react-navigation/native';
export default function AddItems() {
  const [hidePassword, setHidePassword] = useState(true)
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  useEffect(() => {
    // Load items from AsyncStorage on mount
    AsyncStorage.getItem('items').then((data) => {
      if (data !== null) {
        setItems(JSON.parse(data));
      }
    });
  }, [items]);

  const addItem = async () => {
    if (account.trim() === '' || password.trim() === '') {
      alert('Account and password values cannot be empty.');
      return;
    }
    try {
      const newItem = {
        id: items.length,
        name: name,
        account:account,
        password: encryptText(password, 'yourkey'), // replace 'yourkey' for a key to encrypt your password
      };
      const newItems = [...items, newItem];
      setItems(newItems);
      await AsyncStorage.setItem('items', JSON.stringify(newItems));
      setName('')
      setAccount('');
      setPassword('');
      navigation.goBack()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, justifyContent:'flex-end'}} keyboardVerticalOffset={125}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.modalRow]}>
          {/* Account textinput */}
          <TextInput placeholder='Name' style={[styles.txtInp]} placeholderTextColor="gray" value={name} onChangeText={(e) => { setName(e) }} />
          <TextInput placeholder='Account' style={[styles.txtInp]} placeholderTextColor="gray" value={account} onChangeText={(e) => { setAccount(e) }} />
          <View style={styles.txtInpViewPass}>
            {/* Password textinput */}
            <TextInput placeholder='Password' style={[styles.txtInpIcon]} placeholderTextColor="gray" secureTextEntry={hidePassword ? true : false} value={password} onChangeText={(e) => { setPassword(e) }} />
            {/* Add new item into the local database button */}
            <Pressable onPress={() => { setHidePassword(!hidePassword) }}>
              <MaterialCommunityIcons name={hidePassword ? 'eye' : 'eye-off'} size={22} color='black' />
            </Pressable>
          </View>
          <Button title="Save" onPress={addItem} />
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
