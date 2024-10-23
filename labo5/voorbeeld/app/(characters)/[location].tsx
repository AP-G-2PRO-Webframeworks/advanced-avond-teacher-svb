import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native";

interface Location {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
}

interface LocationProps { 
    location: Location
}

function Location({ location } : LocationProps) { 
    return (
        <View>
            <Text>{ location.name}</Text>
            <Text>{ location.dimension}</Text>
            <Text>{ location.type}</Text>
        </View>
    )
}

function Locations() { 
    const { location } = useLocalSearchParams<{ location: string }>();

    const [locations, setLocations] = useState<Location[]>();

    const loadData = () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbS52YW5iYXR0ZWxAYXAuYmUiLCJpYXQiOjE3MjgzODI2MDJ9.ZRlRKTvk35ZZl7EHVZukE26jorXKklq84Bbv5Dq6ksQ";
        const headers = { 'Authorization': `Bearer ${token}` };
        const baseURL = `https://sampleapis.assimilate.be/rickandmorty/locations/?name=${location}`;

        fetch(baseURL, { headers })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setLocations(data);
            });
    }

    useEffect(
        () => {
            loadData()
        },
        []
    )

    return (
        <View>
            <FlatList
                data={locations}
                renderItem={({item}) => <Location location={item} />}/>
        </View>
    )
}

export default Locations;