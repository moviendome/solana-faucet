import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

type Props = {
  children: React.ReactNode;
  position?: String;
};

const Background = ({ children, position }: Props) => (
  <ImageBackground
    source={
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/5557586/331436_705541.jpeg"
    }
    resizeMode="cover"
    style={styles.background}
  >
    <KeyboardAvoidingView
      style={[
        styles.container,
        position === "bottom" ? styles.bottom : undefined,
      ]}
      behavior="padding"
    >
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
    // width: "100%",
    // maxWidth: 340,
    // alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "yellow",
  },

  bottom: {
    justifyContent: "flex-end",
  },
});

export default memo(Background);
