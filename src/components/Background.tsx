import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  // KeyboardAvoidingView,
} from "react-native";

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => (
  <ImageBackground
    source={require("../../assets/background.jpg")}
    resizeMode="cover"
    style={styles.background}
  >
    <View style={styles.container}>{children}</View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    width: 700,
    alignSelf: "center",
  },
});

export default memo(Background);
