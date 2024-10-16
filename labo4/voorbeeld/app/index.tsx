import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

function App() { 
    return (
        <View>
            <View>
                <Link href="/shop">Shop</Link>
            </View>
            <Text>Hello World!</Text>
            <Button title="button" onPress={() => {router.replace("/about"); }} />
        </View>
    )
}

export default App;