import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class Soal extends Component {
  _onPressButton = () => {
    this.props.navigation.navigate('Profil');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton}>
            <Text style={styles.text}>Latihan Soal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.text}>Ujian Seni Lukis</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
