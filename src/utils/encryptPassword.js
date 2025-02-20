import CryptoJS from "crypto-js";

// Generate an 8-character random alphanumeric string
const generateRandomString = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomStr = "";
  for (let i = 0; i < 8; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomStr;
};

// Encrypt the password using AES
const encryptAES = (text, key) => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

// Encode with Base64
const encodeBase64 = (text) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};

// Main function to encrypt the password
export const encryptPassword = (password) => {
  const randomStr = generateRandomString();
  const encryptedAES = encryptAES(randomStr + password, "my-secret-key"); // Replace with an actual secret key
  const finalEncrypted = encodeBase64(encryptedAES);
  return finalEncrypted;
};
