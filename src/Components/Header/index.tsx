import { View, Text, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import BackIcon from '../../Assets/backIcon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = (props: any) => {
    const {title, screenName, navigation}  = props;

    // function to go back to previous screen
    const onBackIconPress  = () => {
        navigation.goBack();
    };

  return (
    <View style = {Styles.header}>
      {/* If the header is not in home screen, it will show the back button */}
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