import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/Screens/HomeScreen';
import PostsCreationScreen from '../src/Screens/PostsCreationScreen';
import PostScreen from '../src/Screens/PostScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="PostsCreation" component={PostsCreationScreen} />
                <Stack.Screen name="Post" component={PostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation