import * as LocalAuthentication from 'expo-local-authentication';

export const auth = async () => {
    const hasBiometrics = await LocalAuthentication.hasHardwareAsync();

    if (hasBiometrics) {
        const type = await LocalAuthentication.supportedAuthenticationTypesAsync();

        if (type.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
            const authResult = await LocalAuthentication.authenticateAsync();
            return(authResult.success);
        } else {
            Alert.alert('Face ID is not supported on this device');
        }
    } else {
        Alert.alert('Biometric authentication is not available on this device');
    }
}