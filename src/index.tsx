import {StatusBar} from "expo-status-bar";
import React from "react"
import {StyleSheet, View} from "react-native";

import {Text, withTheme} from "react-native-paper"


const App = ({theme}) => {
  const {colors} = theme;

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
