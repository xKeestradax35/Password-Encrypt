import React, { useEffect, useState } from 'react'
import ItemsList from '../itemsLists/ItemsList'
import * as LocalAuthentication from 'expo-local-authentication';
import { Text, View } from 'react-native';
import { auth } from '../../api/authentication';
export default function HomeScreen() {

    const [isAuth, setAuth] = useState(false)

    const handleAuthentication = async () => {
        const hasBiometrics = await LocalAuthentication.hasHardwareAsync();

        if (hasBiometrics) {
            const type = await LocalAuthentication.supportedAuthenticationTypesAsync();

            if (type.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
                const authResult = await LocalAuthentication.authenticateAsync();
                setAuth(authResult.success);
            } else {
                Alert.alert('Face ID is not supported on this device');
            }
        } else {
            Alert.alert('Biometric authentication is not available on this device');
        }
    };

    useEffect(() => {
        // handleAuthentication()
        auth().then(e =>{
            setAuth(e)
        })
    }, []);

    return (
        <View>
           {isAuth ? <ItemsList/> : null}
        </View>
    )
}
