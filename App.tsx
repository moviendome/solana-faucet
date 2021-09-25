import React from "react";
import { DarkTheme, Provider as PaperProvider } from "react-native-paper";

import App from "./src/index";

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

const Main = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

export default Main;
