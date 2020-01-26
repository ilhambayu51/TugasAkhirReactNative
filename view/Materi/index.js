import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
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
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton2}>
            <Text style={styles.text}>Pengertian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton}>
            <Text style={styles.text}>Aliran</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton}>
            <Text style={styles.text}>Unsur</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton2}>
            <Text style={styles.text}>Sejarah</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton2}>
            <Text style={styles.text}>Fungsi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton2}>
            <Text style={styles.text}>Alat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton2}>
            <Text style={styles.text}>Bahan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton2}>
            <Text style={styles.text}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this._onPressButton2}>
            <Text style={styles.text}>Teknik</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
