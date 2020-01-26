/* eslint-disable no-unused-vars */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {HomeStack, ProfilStack, MateriStack, SoalStack} from './stackNavigator';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      },
    },
    Materi: {
      screen: MateriStack,
      navigationOptions: {
        tabBarLabel: 'Materi',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'file-alt'} />
          </View>
        ),
      },
    },
    Soal: {
      screen: SoalStack,
      navigationOptions: {
        tabBarLabel: 'Soal',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              style={[{color: tintColor}]}
              size={25}
              name={'clipboard-list'}
            />
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfilStack,
      navigationOptions: {
        tabBarLabel: 'Profil',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'user-alt'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#82D6EE',
    inactiveColor: '#d2d2d2',
    barStyle: {backgroundColor: '#fff'},
  },
);

export default createAppContainer(TabNavigator);
