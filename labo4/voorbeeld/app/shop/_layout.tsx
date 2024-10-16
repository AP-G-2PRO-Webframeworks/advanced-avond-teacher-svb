import { Slot, Tabs } from "expo-router";
import { View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function MainLayout() { 
    return (
        <Tabs>
            <Tabs.Screen name="index" options={
                {
                    title: "winkeltje",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={ size} color={ color} />
                }
            } />
            <Tabs.Screen name="[productId]" options={{ href: null}} />
        </Tabs>
    );
}

export default MainLayout;