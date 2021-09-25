import {StatusBar} from "expo-status-bar";
import React from "react"
import {StyleSheet, View} from "react-native";

import {withTheme} from "react-native-paper"

import {Button} from "./components"


const App = ({theme}) => {
  const {colors} = theme;

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.panelContainer}>
        <Button mode="outlined">Connect to Phantom</Button>
        <StatusBar style="auto" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  panelContainer: {
    width: "100%",
    maxWidth: 500,
  }
});

export default withTheme(App);
