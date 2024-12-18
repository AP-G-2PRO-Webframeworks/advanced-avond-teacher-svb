import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';

function LogoTitle() {
    return (
      <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    );
  }

function MainLayout() { 
    return (
        <Stack screenOptions={
            {
                headerStyle: {
                    backgroundColor: "orange"
                }
            }
        }>
            <Stack.Screen name="index" options={{title: "home", animation: "slide_from_right"}} />
            <Stack.Screen name="shop/index" options={{title: "winkeltje", animation: "slide_from_right"}} />
            <Stack.Screen name="shop/[productId]" options={{title: "product"}} />
        </Stack>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 50,
      height: 50,
    },
  });

export default MainLayout;