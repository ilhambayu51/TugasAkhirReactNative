import {createStackNavigator} from 'react-navigation-stack';
import Home from '../view/HomeScreen';
import Profil from '../view/ProfilScreen';
import Materi from '../view/Materi';
import Soal from '../view/Soal';
import Pengertian from '../view/Pengertian';

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
});

export const PengertianStack = createStackNavigator({
  Pengertian: {
    screen: Pengertian,
    navigationOptions: {
      header: null,
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
