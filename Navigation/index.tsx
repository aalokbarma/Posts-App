import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/Screens/HomeScreen';
import PostsCreationScreen from '../src/Screens/PostsCreationScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="PostsCreation" component={PostsCreationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation