import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Styles from './styles';
import Header from '../../Components/Header';

const PostScreen = (props: any) => {
    const {navigation, route} = props;
    const item = route.params.item;
  return (
    <View style = {Styles.postScreen}>
      <Header 
            title = "Post"
            screenName = "Post"
            navigation = {navigation}
        />
        <View style = {Styles.contentContainer}>
            <View style = {Styles.postContainer}>
                <View style = {Styles.titleContainer}>
                    <Text style = {Styles.postTitle}>
                        {item.title}
                    </Text>
                </View>
                <ScrollView>
                    <Text style = {Styles.postBody}>
                        {item.body}
                    </Text>
                </ScrollView>
            </View>
        </View>
    </View>
  )
}

export default PostScreen;