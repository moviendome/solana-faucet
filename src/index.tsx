import React, {useMemo, useEffect, useState, useCallback} from "react"
import {
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";

import {WalletNotConnectedError} from '@solana/wallet-adapter-base';
import {PublicKey, Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL} from '@solana/web3.js';

import {
  WalletModalProvider,
  WalletConnectButton,
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Background, Button} from "./components"

import {StyleSheet, View} from "react-native";

import {Text, withTheme} from "react-native-paper"

const App = ({theme}) => {
  const {colors} = theme;

  const {connection} = useConnection();
  const {publicKey, sendTransaction} = useWallet();

  const _send = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1,
      })
    );

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, 'processed');
  }, [publicKey, sendTransaction, connection]);


  const _requestAirDrop = async () => {
    const publicKey = new PublicKey("Dw6N2qHyMxarhNB3oV5MHrg1CKVi9LihUdZxn4MqBnza");

    const airdropSignature = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_SOL
    );

    const signature = await connection.confirmTransaction(airdropSignature);
    return signature;
  };

  // {publicKey === null ? (
  return (
    <Background position="bottom">
      <WalletModalProvider>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <View style={{width: 300}}>
            <WalletMultiButton />
          </View>

          {publicKey !== null && (
            <View style={{width: 300}}>
              <Button mode="contained" onPress={() => _send()}>Send some tokens</Button>
            </View>)}
        </View>

      </WalletModalProvider>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withTheme(App);
