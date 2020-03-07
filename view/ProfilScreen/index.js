import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../ProfilScreen/styles';

export default class Home extends Component {
  _OnPress = () => {
    this.props.navigation.navigate('About');
  };
  _OnPress2 = () => {
    this.props.navigation.navigate('Contact');
  };
  render() {
    return (
      <View>
        <Image
          source={require('../../assets/images/Group13.png')}
          style={styles.img1}
        />
        <View style={styles.view1}>
          <Image
            source={require('../../assets/images/profil.png')}
            style={styles.img3}
          />
          <Text style={styles.text1}>Farah Luthfiyani</Text>
          <Text style={styles.text2}>farahluth@gmail.com</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text3} onPress={this._OnPress}>
            Tentang Aplikasi
          </Text>
          <View style={styles.border} />
          <Text style={styles.text3} onPress={this._OnPress2}>
            Kontak Kami
          </Text>
        </View>
        <TouchableOpacity style={styles.view3}>
          <Text style={styles.text3}>Keluar</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/Frame9.png')}
          style={styles.img2}
        />
      </View>
    );
  }
}
