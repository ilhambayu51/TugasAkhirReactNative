import {createStackNavigator} from 'react-navigation-stack';
import Home from '../view/HomeScreen';
import Profil from '../view/ProfilScreen';
import Materi from '../view/Materi';
import Soal from '../view/Soal';
import Pengertian from '../view/Pengertian';
import Aliran from '../view/Aliran';
import Unsur from '../view/Unsur';
import Sejarah from '../view/Sejarah';
import Fungsi from '../view/Fungsi';
import Alat from '../view/Alat';
import Bahan from '../view/Bahan';
import Medium from '../view/Medium';
import Teknik from '../view/Teknik';

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
  Unsur: {
    screen: Unsur,
    navigationOptions: {
      tabBarVisible: null,
    },
  },
  Sejarah: {
    screen: Sejarah,
    navigationOptions: {
      tabBarVisible: null,
    },
  },
  Fungsi: {
    screen: Fungsi,
    navigationOptions: {
      tabBarVisible: null,
    },
  },
  Alat: {
    screen: Alat,
    navigationOptions: {
      tabBarVisible: null,
    },
  },
  Bahan: {
    screen: Bahan,
    navigationOptions: {
      tabBarVisible: null,
    },
  },
  Medium: {
    screen: Medium,
    navigationOptions: {
      tabBarVisible: null,
    },
  },
  Teknik: {
    screen: Teknik,
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
