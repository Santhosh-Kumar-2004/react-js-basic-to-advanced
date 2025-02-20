from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pymongo
import base64
import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding
from fastapi.middleware.cors import CORSMiddleware
import Crypto.Cipher.AES
import Crypto.Util.Padding 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# MongoDB Connection
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["EncLoginDB"]
users_collection = db["users"]

# AES Encryption Keys
# SECRET_KEY = os.urandom(32)  # 256-bit key (AES-256)
# IV = os.urandom(16)  # 128-bit IV (Initialization Vector)

# Define the same secret key used in the frontend
SECRET_KEY = b"my-secret-key123"  # Must be 16, 24, or 32 bytes
IV = b"1234567890123456"  # AES requires a 16-byte IV

def decrypt_password(encrypted_data: str) -> str:
    """ Decrypts the password received from the frontend """

    # Step 1: Decode Base64
    encrypted_data = base64.b64decode(encrypted_data)

    # Step 2: AES Decrypt
    cipher = Crypto.Cipher.AES.new(SECRET_KEY, Crypto.Cipher.AES.MODE_CBC, IV)
    decrypted_padded = cipher.decrypt(encrypted_data)

    # Step 3: Remove Padding
    decrypted_data = Crypto.Util.Padding.unpad(decrypted_padded, Crypto.Cipher.AES.block_size).decode()

    # Step 4: Remove the first 8 characters (random string)
    actual_password = decrypted_data[8:]  # Skip the first 8 chars

    return actual_password

# Model for Login Data
class LoginData(BaseModel):
    email: str
    password: str

# AES Encrypt Function
def aes_encrypt(data: str) -> str:
    padder = padding.PKCS7(algorithms.AES.block_size).padder()
    padded_data = padder.update(data.encode()) + padder.finalize()

    cipher = Cipher(algorithms.AES(SECRET_KEY), modes.CBC(IV))
    encryptor = cipher.encryptor()
    encrypted_bytes = encryptor.update(padded_data) + encryptor.finalize()

    return base64.b64encode(encrypted_bytes).decode()

# AES Decrypt Function
def aes_decrypt(encrypted_data: str) -> str:
    encrypted_bytes = base64.b64decode(encrypted_data)

    cipher = Cipher(algorithms.AES(SECRET_KEY), modes.CBC(IV))
    decryptor = cipher.decryptor()
    decrypted_padded = decryptor.update(encrypted_bytes) + decryptor.finalize()

    unpadder = padding.PKCS7(algorithms.AES.block_size).unpadder()
    decrypted_data = unpadder.update(decrypted_padded) + unpadder.finalize()
    
    print(f"🔓 Decrypted Password: {decrypted_data.decode()}")  # Console log the decrypted password

    return decrypted_data.decode()

# ------------------------------------------------
# REGISTER ROUTE: Store Encrypted Password
# ------------------------------------------------
@app.post("/register")
async def register_user(user: LoginData):
    encrypted_password = aes_encrypt(user.password)

    users_collection.insert_one({
        "email": user.email,
        "password": encrypted_password
    })
    return {"message": "User registered successfully!"}

# ------------------------------------------------
# LOGIN ROUTE: Authenticate User
# ------------------------------------------------
@app.post("/login")
async def login_user(user: LoginData):
    existing_user = users_collection.find_one({"email": user.email})

    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found!")

    decrypted_password = aes_decrypt(existing_user["password"])

    if decrypted_password == user.password:
        return {"message": "✅ Login successful!"}
    else:
        raise HTTPException(status_code=401, detail="❌ Invalid credentials!")
