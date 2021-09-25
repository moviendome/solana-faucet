import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import { theme } from "./src/core/theme";

import App from "./src/index";

const Main = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

export default Main;
