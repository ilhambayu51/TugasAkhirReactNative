import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../ProfilScreen/styles';

export default class Home extends Component {
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
        <TouchableOpacity style={styles.view2}>
          <Text style={styles.text3}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view3}>
          <Text style={styles.text3}>Log out</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/Frame9.png')}
          style={styles.img2}
        />
      </View>
    );
  }
}
