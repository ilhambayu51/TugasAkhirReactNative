import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './styles';

export default class Latihan extends Component {
  render() {
    return (
      <View style={styles.View}>
        <Text style={styles.text1}>
          Karya seni lukis merupakan kegiatan rohani yang direfleksikan pada
          jasmani dan mempunyai daya yang bisa membangkitkan jiwa. Adalah
          perngertian dari
        </Text>
        <View style={styles.view1}>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.text1}>Soedarso SP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.text1}>Soni Ade & Imam R</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.text1}>Jim Supangat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.text1}>Herbert Read</Text>
          </TouchableOpacity>
        </View>
        <Button title="Lanjut" color="#e2e2e2" />
      </View>
    );
  }
}
