/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

export default class Soal extends Component {
  _onPressButton = () => {
    this.props.navigation.navigate('Latihan');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton}>
            <Image
              source={require('../../assets/images/Frame5.png')}
              style={styles.Image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Image
              source={require('../../assets/images/Ujian.png')}
              style={styles.Image}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
