import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({ mode, style, children, ...props }: Props) => (
  <PaperButton
    style={[styles.button, style]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 3,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    textTransform: "capitalize",
  },
});

export default memo(Button);
