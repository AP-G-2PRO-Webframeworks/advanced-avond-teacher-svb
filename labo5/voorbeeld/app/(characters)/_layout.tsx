import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { Tabs, Stack } from "expo-router";
import decodeUriComponent from 'decode-uri-component';


function Layout() {
    return (
        <Stack>
        <Stack.Screen
            name="index"
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="[location]"
            options={({ route }) => ({ title: decodeUriComponent(route.params?.location) })}
        />
        </Stack>
    )
}

export default Layout;