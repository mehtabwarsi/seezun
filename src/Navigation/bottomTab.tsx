import {Easing, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import ListIcon from 'react-native-vector-icons/Octicons';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../Screens/TabScreen/homescreen';
import SearchScreen from '../Screens/TabScreen/searchScreen';
import ListScreen from '../Screens/TabScreen/listScreen';
import ProfileScreen from '../Screens/TabScreen/profileScreen';
import MessageScreen from '../Screens/TabScreen/messageScreen';
import {BottomTabParamList} from '.';
import {Fonts, FontSize} from '../Theme/fonts';
import {Color, TextColor} from '../Theme/color';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'shift',
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: Fonts.Gotham,
          color: TextColor.secondaryTextColor,
          fontSize: FontSize.S,
        },
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Color.primaryColor,
        tabBarInactiveTintColor: TextColor.secondaryTextColor,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 400,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <SearchIcon name="search" size={size} color={color} />
          ),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 400,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color, size}) => (
            <ListIcon name="diff-added" size={size} color={color} />
          ),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 400,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
            <MessageIcon
              name="message-text-outline"
              size={size}
              color={color}
            />
          ),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 400,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <ProfileIcon name="user-circle" size={size} color={color} />
          ),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 400,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
