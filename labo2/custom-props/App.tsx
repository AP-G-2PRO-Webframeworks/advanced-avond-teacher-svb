import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import { View, StyleSheet, Text } from "react-native";
import Constants from 'expo-constants';

function Rainbow() {
  const rb = rainbow(5);
  return (
    <>
      {
        rb.map((c, i) => <View key={i} style={[styles.rainbowstroke, {backgroundColor: c.hex}]}></View>)
      }
    </>
  );
}

export default function App() {

  return (

    <View style={styles.container}>
      <Rainbow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
  },
  rainbowstroke: {
    width: "100%", height: 40
  },
  rainbowtest: {
    backgroundColor: "red"
  }
});