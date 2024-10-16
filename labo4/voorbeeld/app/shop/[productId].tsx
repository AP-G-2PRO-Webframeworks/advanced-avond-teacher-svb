import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

function ProductPage() { 
    const { productId } = useLocalSearchParams<{productId: string }>();

    return (
        <View>
            <Text>Product page for productId: { productId }</Text>
        </View>
    )
}

export default ProductPage;