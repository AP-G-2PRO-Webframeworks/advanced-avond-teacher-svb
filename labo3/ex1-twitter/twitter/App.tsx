import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';


interface Tweet {
  id: number;
  handle: string;
  text: string;
  createdOn: Date;
  name?: string;
}

export interface Profile {
  id: number;
  handle: string;
  name: string;
  bio: string;
  avatar: string;
  banner: string;
}

interface DataContext {
  tweets: Tweet[],
  profiles: Profile[],
  loading: boolean,
  loadData: () => void
}

const DataContext = React.createContext<DataContext>({ tweets: [], profiles: [], loading: false, loadData: () => { } });

function DataProvider({ children }: { children: React.ReactNode }) {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);

    const responseTweets = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/tweets");
    const jsonTweets = await responseTweets.json();
    setTweets(jsonTweets);

    const responseProfiles = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/profiles");
    const jsonProfiles = await responseProfiles.json();
    setProfiles(jsonProfiles);

    setLoading(false);
  }

  useEffect(() => { loadData() }, []);

  return (
    <DataContext.Provider value={{ tweets: tweets, profiles: profiles, loadData: loadData, loading: loading }}>{children}</DataContext.Provider>
  );
}

function TweetList() {
  const { tweets, profiles, loading } = useContext(DataContext);

  console.log(profiles);

  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={
          ({ item }) => {
            return (
              <View style={styles.tweet}>
                <View>
                  <Image style={styles.avatar} source={{uri: profiles.find(p => p.handle == item.handle)?.avatar}} />
                  <View>
                    <Text>{ profiles.find(p => p.handle == item.handle)?.name }</Text>
                    <Text>{item.handle}</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 32, color: "#666" }}>{item.text}</Text>
              </View>
            )
          }
        }
        ListFooterComponent={
          <View>
            {
              loading &&
              <Text>loading...</Text>
            }
          </View>
        }
      />
    </View>
  );
}

export default function App() {


  return (
    <DataProvider>
      <TweetList />
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tweet: {
    margin: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#ccc",
    shadowColor: "#ccc",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
    padding: 8

  },
  avatar: {
    width: 50, height: 50,
    borderRadius: 999
  }
});
