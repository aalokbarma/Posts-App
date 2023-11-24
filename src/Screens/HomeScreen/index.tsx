import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import Header from '../../Components/Header';

const HomeScreen = () => {
  return (
    <View style = {Styles.homeScreen}>
        <Header 
            title = "Post App"
        />
    </View>
  )
}

export default HomeScreen;