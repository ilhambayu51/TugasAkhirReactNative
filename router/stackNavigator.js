import {createStackNavigator} from 'react-navigation-stack';
import Home from '../view/HomeScreen';
import Profil from '../view/ProfilScreen';
import Materi from '../view/Materi';
import Soal from '../view/Soal';
import Pengertian from '../view/Pengertian';
import Aliran from '../view/Aliran';
import Unsur from '../view/Unsur';

export const ProfilStack = createStackNavigator({
  Profil: {
    screen: Profil,
    navigationOptions: {
      tabBarVisible: true,
    },
  },
});

export const SoalStack = createStackNavigator({
  Soal: {
    screen: Soal,
    navigationOptions: {
      tabBarVisible: true,
    },
  },
});

export const MateriStack = createStackNavigator({
  Materi: {
    screen: Materi,
    navigationOptions: {
      tabBarVisible: true,
    },
  },
  Unsur: {
    screen: Unsur,
    navigationOptions: {
      tabBarVisible: null,
    },
  },
  Aliran: {
    screen: Aliran,
    navigationOptions: {
      tabBarVisible: null,
    },
  },
  Pengertian: {
    screen: Pengertian,
    navigationOptions: {
      tabBarVisible: null,
    },
  },
});

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true,
        header: null,
      },
    },
  },
  {initialRouteParams: 'Home'},
);
