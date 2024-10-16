import { Stack } from "expo-router";

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

export default MainLayout;