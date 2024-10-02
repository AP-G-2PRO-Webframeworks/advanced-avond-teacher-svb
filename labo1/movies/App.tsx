import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      { 
        movies.map(m => <Image source={m.url} style={ styles.image } />)
      }
    </View>
  );
}

const movies = [
  {
    url: require("./assets/jaws.jpg"),
    // url: "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@._V1_.jpg",
    name: "jaws",
    year: 1998
  },
  {
    url: require("./assets/casper.jpg"),
    // url: "https://m.media-amazon.com/images/M/MV5BM2JlOGI4NzAtYjAwNS00NmRkLTg4OTctZGU3ZDAwNjEzNTk1XkEyXkFqcGc@._V1_.jpg",
    name: "Casper meets Wendy",
    year: 1995
  },
  {
    url: require("./assets/moonlight.jpg"),
    // url: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg",
    name: "moonlight",
    year: 2016
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100
  }
});
