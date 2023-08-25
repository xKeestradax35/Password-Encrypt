import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, Modal, SafeAreaView, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import { styles } from '../styles/Screens'
import { useNavigation } from '@react-navigation/native'

export default function Alert({ route }) {
    const navigation = useNavigation()

    const { password } = route.params

    const [items, setItems] = useState([]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, justifyContent: 'flex-end' }} keyboardVerticalOffset={125}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.modalRow]}>
                    <Text style={styles.showPassModalTitle}>Your Password</Text>
                    <View style={styles.showPassModalPassView}>
                    <Text style={styles.showPassModalPassText}>{password}</Text>

                    </View>
                    <Button title="Close" onPress={() => navigation.goBack()} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
