import { View, Text, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import BackIcon from '../../Assets/backIcon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = (props: any) => {
    const {title, screenName, navigation}  = props;

    const onBackIconPress  = () => {
        navigation.goBack();
    };

  return (
    <View style = {Styles.header}>
        {
            screenName != "Home" ? 
            <TouchableOpacity style = {Styles.backIconContainer} onPress={() => onBackIconPress()}>
                <Image 
                    source={BackIcon}
                    style = {Styles.backIcon}
                />
            </TouchableOpacity>
            :
            <View style = {Styles.emptyView} />
        }
      <Text style = {Styles.headerTitle}>{title}</Text>
      <View style = {Styles.emptyView} />
    </View>
  )
}

export default Header;