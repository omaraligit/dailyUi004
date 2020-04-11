/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Details from './screens/Details';
import theme from './theme/mainTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tabs = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#1A60C1" barStyle={'light-content'} />
        <Tabs.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              var iconName = '';

              if (route.name == 'Track') iconName = 'search';
              if (route.name == 'Manage') iconName = 'box-open';
              if (route.name == 'Ship') iconName = 'box';

              // You can return any component that you like here!
              var color = focused ? theme.primaryColor : theme.disabledMenu;
              return (
                <Icon
                  name={iconName}
                  size={20}
                  color={color}
                  style={{paddingTop: 10}}
                />
              );
            },
          })}
          tabBarOptions={{
            showLabel: true,
            activeTintColor: theme.primaryColor,
            inactiveTintColor: theme.disabledMenu,
            labelStyle: {
              fontFamily: 'CircularStd-Bold',
            },
            style: {
              backgroundColor: '#fff',
              height: 60,
              paddingBottom: 5,
            },
          }}>
          <Tabs.Screen name="Track" component={Home} />
          <Tabs.Screen name="Manage" component={Details} />
          <Tabs.Screen name="Ship" component={Details} />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}
