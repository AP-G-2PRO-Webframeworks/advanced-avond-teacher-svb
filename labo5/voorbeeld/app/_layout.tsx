import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { Tabs } from "expo-router";

function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="(characters)"
                options={{
                    title: "CHARACTERS"
                }}
            />
            <Tabs.Screen
                name="episodes"
                options={{
                    title: "EPISODES"
                }}
            />
        </Tabs>
    )
}

export default Layout;