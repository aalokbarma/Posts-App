import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';

const PostsCard = (props: any) => {
    const {item, navigation} = props;
    const onCardPress = () => {
        navigation.navigate("Post", {item: item})
    }
  return (
    <View style = {Styles.postCard}>
        <TouchableOpacity style = {Styles.postCardContainer} onPress={() => onCardPress()}>
            <Text 
                style = {Styles.cardTitle} 
                numberOfLines={1}
            >
                {item?.title}
            </Text>
            <Text 
                style = {Styles.cardBody}
                numberOfLines={2}
            >
                {item?.body}
            </Text>

        </TouchableOpacity>
    </View>
  )
}

export default PostsCard;