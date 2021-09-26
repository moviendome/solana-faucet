import React, { useMemo } from "react";
import { Provider as PaperProvider } from "react-native-paper";

import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { getPhantomWallet } from "@solana/wallet-adapter-wallets";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";

import { theme } from "./src/core/theme";

import App from "./src/index";

const Main = () => {
  const wallets = useMemo(() => [getPhantomWallet()], [network]);

  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <PaperProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <App />
        </WalletProvider>
      </ConnectionProvider>
    </PaperProvider>
  );
};

export default Main;
