import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <ForList />
    </View>
  )
}



















function SingleState() {
  const [text, setText] = useState("joske vermeulen");

  return (
    <View style={{ flexDirection: "column", flex: 1, borderColor: "green", borderWidth: 4, margin: 4 }}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Text>You typed: {text}</Text>
      <Button title="Show Value" onPress={() => { console.log(text); }} />
    </View>
  )
}











function MultiState() {
  const [text, setText] = useState("");

  return (
    <View style={{ flexDirection: "column", flex: 1, borderColor: "red", borderWidth: 4, margin: 4 }}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setText(text)}
        value={text}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setText(text)}
        value={text}
      />
    </View>
  )
}
















function ForList() {
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  return (
    <FlatList
      data={colors}
      renderItem={
        ({item} ) => <View style={{height: 200, backgroundColor: item}} />
      }
      ListFooterComponent={
        <Text>hallo!</Text>
      }
    >
      

    </FlatList>
  )
}