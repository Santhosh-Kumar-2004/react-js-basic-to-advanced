import CryptoJS from "crypto-js";

// Decrypt AES function
const decryptAES = (ciphertext, key) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Decode from Base64
const decodeBase64 = (base64Text) => {
  return CryptoJS.enc.Base64.parse(base64Text).toString(CryptoJS.enc.Utf8);
};

// Main function to decrypt the password
export const decryptPassword = (encryptedText) => {
  try {
    const base64Decoded = decodeBase64(encryptedText);
    const decryptedText = decryptAES(base64Decoded, "my-secret-key"); // Use the same key
    return decryptedText;
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};
