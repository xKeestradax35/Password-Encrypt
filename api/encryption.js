
import CryptoJS from 'react-native-crypto-js';

export const encryptText = (plainText, secretKey) => {
  const encryptedText = CryptoJS.AES.encrypt(plainText, secretKey).toString();
  return encryptedText;
};


export const decryptText = (encryptedText, secretKey) => {
    const decryptedText = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
    return decryptedText;
  };