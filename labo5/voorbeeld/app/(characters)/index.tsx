import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Link } from "expo-router";

export interface ICharacter {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Origin;
    image: string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export enum Origin {
    Abadango = "Abadango",
    EarthC137 = "Earth (C-137)",
    EarthReplacementDimension = "Earth (Replacement Dimension)",
    Unknown = "unknown",
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

interface CharacterProps {
    character: ICharacter
}

function Character({ character }: CharacterProps) {
    return (
        <View>
            <Text>{character.name}</Text>
            <Link
                style={{color: "blue", textDecorationLine: "underline"}}
                href={{
                    pathname: "/[location]",
                    params: { location: character.origin }
                }}>
                <Text>{character.origin}</Text>
            </Link>
        </View>
    )
}

function Characters() {
    const [characters, setCharacters] = useState<ICharacter[]>();

    const loadData = async () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbS52YW5iYXR0ZWxAYXAuYmUiLCJpYXQiOjE3MjgzODI2MDJ9.ZRlRKTvk35ZZl7EHVZukE26jorXKklq84Bbv5Dq6ksQ";
        const headers = { 'Authorization': `Bearer ${token}` };
        const baseURL = "https://sampleapis.assimilate.be/rickandmorty/characters/";

        const response = await fetch(baseURL, { headers });
        const data = await response.json();
        setCharacters(data);
    }

    useEffect(
        () => {
            loadData()
        },
        []
    )

    return (
            <FlatList
                data={characters}
                renderItem={({ item }) => <Character character={item} />} />
    )
}

export default Characters;