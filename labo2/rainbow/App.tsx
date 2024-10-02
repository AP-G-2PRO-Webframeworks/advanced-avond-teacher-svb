import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import { View, StyleSheet, ViewStyle, StyleProp, Text, TextStyle } from "react-native";
import Constants from 'expo-constants';

interface RainbowProps {
  rainbowStyle: StyleProp<ViewStyle>,
  rainbowContainerStyle?: StyleProp<ViewStyle>,
}

interface FooterProps {
  text: string
}

interface LetterProps { 
  letter: string,
  letterStyle: StyleProp<TextStyle>
}

function Letter({ letterStyle, letter }: LetterProps) { 
  return (
    <Text style={ letterStyle }>{ letter }</Text>
  )
}

function Footer({ text }: FooterProps) {
  const colors = rainbow(text.length);

  return (
    <View style={styles.footer }>
      {
        text.split("").map((l, i) => <Letter letter={l} letterStyle={{ color: colors[i].hex} } />)
      }
    </View>
  );
}

function Rainbow({ rainbowStyle, rainbowContainerStyle }: RainbowProps) {
  const colors = rainbow(6);

  return (
    <View style={[styles.rainbowContainer, rainbowContainerStyle]}>
      {
        colors.map(clr => <View style={[rainbowStyle, { backgroundColor: clr.hex }]}></View>)
      }
    </View>
  );
}

export default function App() {

  return (
    <View style={styles.container}>
      <Rainbow rainbowStyle={{ height: 10 }}></Rainbow>
      <View style={styles.main}>
        <Rainbow rainbowContainerStyle={{ flexGrow: 1, flexDirection: "row", gap: 20 }} rainbowStyle={{ width: 10 }}></Rainbow>
        <Rainbow rainbowContainerStyle={{ flexGrow: 1, alignItems: "center" }} rainbowStyle={{ height: 40, width: 40, margin: 40 }}></Rainbow>
      </View>
      <Footer text="joske vermeulen" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    flexDirection: "column"
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  },
  rainbowContainer: {
    justifyContent: "space-between",
  },
  footer: {
    justifyContent: "flex-start",
    flexDirection: "row"
  }
});