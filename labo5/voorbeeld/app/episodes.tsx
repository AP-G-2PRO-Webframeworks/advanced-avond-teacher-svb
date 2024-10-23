import React, { useEffect, useState } from "react";
import { View, Button, FlatList } from "react-native";

export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: number;
    season: number;
}

interface EpisodeProps {
    episode: IEpisode
}

function Episode({ episode }: EpisodeProps) {
    return (
        <View>
            {episode.name}
        </View>
    );
}

function Episodes() {
    const [episodes, setEpisodes] = useState<IEpisode[]>();

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbS52YW5iYXR0ZWxAYXAuYmUiLCJpYXQiOjE3MjgzODI2MDJ9.ZRlRKTvk35ZZl7EHVZukE26jorXKklq84Bbv5Dq6ksQ";
    const baseURL = "https://sampleapis.assimilate.be/rickandmorty/episodes/";

    const loadData = async () => {
        const headers = { 'Authorization': `Bearer ${token}` };

        const resp = await fetch(baseURL, { headers, mode: "cors"});
        const data = await resp.json();
        setEpisodes(data);

        console.log(data);
    }

    const AddEpisode = async () => {
        const headers = { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
        const newEpisode = {
            "id": 1714,
            "name": "test5",
            "air_date": "December 2, 2024",
            "episode": 666,
            "season": 777
        }

        const resp = await fetch(baseURL,
            {
                headers,
                method: "POST",
                body: JSON.stringify(newEpisode)
            }
        );
        const data = await resp.json();
        console.log(data);
        await new Promise(r => setTimeout(r, 2000));
        await loadData();
    }

    useEffect(
        () => {
            loadData()
        },
        []
    )
    return (
        <View style={{flex: 1}}>
            <View>
                <Button title="Add New Episode" onPress={() => AddEpisode()} />
            </View>
            <FlatList data={episodes} renderItem={({ item }) => <Episode episode={item} />} />
        </View>
    )
}

export default Episodes;