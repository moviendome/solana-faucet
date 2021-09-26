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

import {getData, storeData} from "./common"

import {Background, Button} from "./components"

import {StyleSheet, View} from "react-native";

import {Text, withTheme} from "react-native-paper"

const App = ({theme}) => {
  const [solSent, setSolSent] = useState(false)
  const [solSending, setSolSending] = useState(false);
  const [solSentLabel, setSolSentLabel] = useState("Send 1 SOL");

  const {colors} = theme;

  const {connection} = useConnection();
  const {publicKey, sendTransaction} = useWallet();

  const _send = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    setSolSending(true)

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1,
      })
    );

    try {
      const signature = await sendTransaction(transaction, connection);

      const processed = await connection.confirmTransaction(signature, 'processed');

      if (processed) {
        await storeData();
        setSolSent(true);
      }
    } catch (e) {
      setSolSending(false)
    }

  }, [publicKey, sendTransaction, connection]);

  useEffect(() => {
    async function init() {
      const sent = await getData();
      setSolSent(sent)
    }

    init();
  }, []);

  return (
    <Background position="bottom">
      <WalletModalProvider>
        <View style={styles.row}>
          <View style={[styles.row]}>
            <View style={{marginRight: 20}}>
              {(publicKey === null) ? (
                <WalletMultiButton>
                  Choose a Wallet to Connect
                </WalletMultiButton>) : (<WalletMultiButton />)}
            </View>
            {publicKey !== null && (
              <WalletDisconnectButton />
            )}
          </View>

          {publicKey !== null && (
            <View style={{width: 300}}>
              { !solSent ? (
                <Button mode="contained" loading={solSending} disabled={solSending} onPress={() => _send()}>{solSentLabel}</Button>
              ) : (
                  <Button mode="contained" disabled={true}>1 SOL Sent</Button>
                )}
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default withTheme(App);
