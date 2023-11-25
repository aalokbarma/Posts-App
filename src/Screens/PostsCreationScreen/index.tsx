import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import Header from '../../Components/Header';
import { TextInput } from 'react-native-gesture-handler';

const PostsCreationScreen = ({navigation}: any) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSuccessfulPostCreation = () => {
    navigation.navigate("Home")
  }

  const onSubmitButtonPress = () => {
    if(title == ""){
      Alert.alert('Alert', 'Please enter a valid post title', [
        {text: 'OK', onPress: () => {}},
      ])
    }
    else if(body == ""){
      Alert.alert('Alert', 'Please enter a valid post body', [
        {text: 'OK', onPress: () => {}},
      ])
    } 
    else{
      setTitle("");
      setBody("");
      Alert.alert('Success', 'Your post has been created successfully.', [
        {text: 'OK', onPress: () => onSuccessfulPostCreation()},
      ])
    }
  };

  return (
    <View style = {Styles.postsCreationScreen}>
      <Header 
            title = "Create Post"
            screenName = "PostCreation"
            navigation = {navigation}
        />
        <View style = {Styles.postCreationFormContainer}>
          <View style = {Styles.postCreationForm}>
            <View style = {Styles.inputContainer}>
              <View style = {Styles.inputLableContainer}>
                <Text style = {Styles.inputText}> 
                  Title:
                </Text>
              </View>
              <View style = {Styles.inputFieldContainer}>
                <TextInput 
                  style = {Styles.inputField}
                  placeholder='Enter post title'
                  placeholderTextColor={"#35b5ac"}
                  value={title}
                  onChangeText={(text: string) => setTitle(text)}
                />
              </View>
            </View>
            <View style = {Styles.inputContainer}>
              <View style = {Styles.inputLableContainer}>
                <Text style = {Styles.inputText}> 
                  Body:
                </Text>
              </View>
              <View style = {Styles.inputFieldContainer}>
                <TextInput 
                  style = {Styles.inputField}
                  placeholder='Enter post body'
                  placeholderTextColor={"#35b5ac"}
                  value={body}
                  onChangeText={(text: string) => setBody(text)}
                />
              </View>
            </View>
            <View style = {Styles.submitButtonContainer}>
              <TouchableOpacity style = {Styles.submitButton} onPress={() => onSubmitButtonPress()}>
                <Text style = {Styles.submitText}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  )
}

export default PostsCreationScreen;