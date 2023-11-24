import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';

const Header = ({props}: any) => {
    const {title}  = props
  return (
    <View style = {Styles.header}>
      <View></View>
      <Text style = {Styles.headerTitle}>{title}</Text>
      <View></View>
    </View>
  )
}

export default Header;