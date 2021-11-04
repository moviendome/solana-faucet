import React, { useMemo } from "react";
import { Provider as PaperProvider } from "react-native-paper";

import { clusterApiUrl } from "@solana/web3.js";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import {
  getPhantomWallet,
  getSolflareWallet,
} from "@solana/wallet-adapter-wallets";

import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";

import { theme } from "./src/core/theme";

import App from "./src/index";

const Main = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet()],
    [network]
  );

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

// <a href='https://www.freepik.com/photos/abstract-background'>Abstract background photo created by rawpixel.com - www.freepik.com</a>
