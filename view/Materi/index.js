import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

export default class Materi extends Component {
  _onPressButton = () => {
    this.props.navigation.navigate('Aliran');
  };
  _onPressButton2 = () => {
    this.props.navigation.navigate('Pengertian');
  };
  _onPressButton3 = () => {
    this.props.navigation.navigate('Unsur');
  };
  _onPressButton4 = () => {
    this.props.navigation.navigate('Sejarah');
  };
  _onPressButton5 = () => {
    this.props.navigation.navigate('Fungsi');
  };
  _onPressButton6 = () => {
    this.props.navigation.navigate('Medium');
  };
  _onPressButton7 = () => {
    this.props.navigation.navigate('Teknik');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton2}>
            <Image
              source={require('../../assets/listmateri/pengertian2.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton4}>
            <Image
              source={require('../../assets/listmateri/sejarah.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton}>
            <Image
              source={require('../../assets/listmateri/jenis2.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton3}>
            <Image
              source={require('../../assets/listmateri/unsur.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton5}>
            <Image
              source={require('../../assets/listmateri/fungsi.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton6}>
            <Image
              source={require('../../assets/listmateri/medium.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton7}>
            <Image
              source={require('../../assets/listmateri/teknik.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
