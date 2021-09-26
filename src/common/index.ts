import AsyncStorage from "@react-native-async-storage/async-storage";

// Store
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('solSent')
    return value;
    // if (value !== null) {
    //   return value
    // }
  } catch (e) {
    // error reading value
  }
}

const storeData = async () => {
  try {
    await AsyncStorage.setItem('solSent', true)
  } catch (e) {
    // saving error
  }
}

// Web3

const requestAirDrop = async () => {
  const publicKey = new PublicKey("Dw6N2qHyMxarhNB3oV5MHrg1CKVi9LihUdZxn4MqBnza");

  const airdropSignature = await connection.requestAirdrop(
    publicKey,
    LAMPORTS_PER_SOL
  );

  const signature = await connection.confirmTransaction(airdropSignature);
  return signature;
};


export {
  getData,
  requestAirDrop,
  storeData,
}
