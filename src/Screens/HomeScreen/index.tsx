import { View, Text, FlatList, TouchableOpacity, RefreshControl, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import Header from '../../Components/Header';
import PostsCard from '../../Components/PostCard';
import axios from 'axios';
import SearchIcon from '../../Assets/search.png';

const HomeScreen = ({navigation}: any) => {

    const [postsData, setPostsData] = useState([]);
    const [error, setError] = useState('');
    const [refreshing, setRefreshing ] = useState(false);
    const [search, setSearch] = useState('');

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

    const onCreatePostPress = () => {
      navigation.navigate("PostsCreation")
    }

  return (
    <View style = {Styles.homeScreen}>
        <Header 
            title = "Post App"
            screenName = "Home"
            navigation = {navigation}
        />
        <View>

        <View style = {Styles.searchbarContainer}>
          <View style = {Styles.searchbar}>
            <Image 
              source = {SearchIcon}
              style = {Styles.searchIcon}
            />
            <TextInput 
              placeholder='Search Post...'
              placeholderTextColor={'#666'}
              value={search}
              onChangeText={(text: string) => setSearch(text)}
              style = {Styles.searchInput}
            />
          </View>
        </View>

      {postsData ? (
        <FlatList
        data={postsData.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase())).reverse()}
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
    <TouchableOpacity style = {Styles.createPostButton} onPress={()=> onCreatePostPress()}>
        <Text style = {Styles.createText}>+</Text>
    </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;