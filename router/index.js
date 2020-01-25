import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {ProfilStack, HomeStack, MateriStack, SoalStack} from './stackNavigator';
import App from './tabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeStack,
      Profil: ProfilStack,
      Materi: MateriStack,
      Soal: SoalStack,
      App: App,
    },
    {initialRouteName: 'Home'},
  ),
);
