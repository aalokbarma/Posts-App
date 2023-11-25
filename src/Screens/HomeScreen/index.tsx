import { View, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import Header from '../../Components/Header';
import PostsCard from '../../Components/PostCard';
import axios from 'axios';

const HomeScreen = ({navigation}: any) => {

    const [postsData, setPostsData] = useState([]);
    const [error, setError] = useState();
    const [refreshing, setRefreshing ] = useState(false)

    useEffect(() => {
        getPostsData()
    }, []);

    const handleRefresh = () => {
        setRefreshing(true);
        getPostsData();
        setRefreshing(false);
      };

    const getPostsData = async() => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPostsData(response.data);
          } catch (error: any) {
            setError(error.message);
          }
    }

  return (
    <View style = {Styles.homeScreen}>
        <Header 
            title = "Post App"
            screenName = "Home"
            navigation = {navigation}
        />
        <View>
      {postsData ? (
        <FlatList
        data={postsData}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: any) => (
          <PostsCard item = {item} navigation = {navigation}/>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      />
      ) : (
        <Text>Loading...</Text>
      )}
      {error && <Text>Error: {error}</Text>}
    </View>
    </View>
  )
}

export default HomeScreen;