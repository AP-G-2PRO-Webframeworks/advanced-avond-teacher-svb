import { Text, View } from "react-native";

function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="bg-black text-white font-bold italic">Edit app/index.tsx to edit this screen.</Text>
        </View>
    );
}

export default Index;