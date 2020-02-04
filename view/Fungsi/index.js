/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default class Fungsi extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#ffffff', height: '100%'}}>
        <Text style={styles.title}>1. Fungsi Primer </Text>
        <Text style={styles.content}>
          Fungsi primer dari seni lukis adalah membuat suatu ketertarikan kepada
          lukisan yang diciptakan. Bagi pelukis, lukisan yang dibuat mampu
          mengungkapkan perasaan pribadi pelukis sehingga apa yang dilukisnya
          lebih memuaskan. Sementara bagi pengunjung yang melihat, menimbulkan
          ketertarikan pada lukisan yang diciptakan dan dapat menenangkan hati
          para pengunjung.
        </Text>

        <Text style={styles.title}>2. Fungsi Sekunder </Text>
        <Text style={styles.content}>
          Dalam fungsi sekunder, lukisan bukan hanya sebagai ekspresi atau unsur
          yang dapat memunculkan ketertarikan tersendiri, tetapi lebih
          dikhususkan pada sesuatu yang dapat difungsikan. Lukisan dapat menjadi
          sarana komunikasi yang baik bila tidak ada obyek yang nampak secara
          visual. Selain itu, lukisan dapat difungsikan untuk bisnis, yakni
          dengan menjual karya lukisan anda kepada orang lain yang membutuhkan
          lukisan tertentu sebagai hiasan.
        </Text>
        <Text style={styles.title}>3. Fungsi Fisik </Text>
        <Text style={styles.content}>
          Fungsi fisik lebih dikhususkan pada nilai-nilai estetika yang
          didapatkan dari lukisan tersebut. Menjadikan lukisan sebagai penghias
          ruangan dapat menambah nilai estetika tempat atau ruangan yang
          ditempatinya. Orang akan terkesan ketika berkunjung ke ruangan
          tersebut, bahkan dapat termotivasi, terlebih bila lukisan tersebut
          mengandung ekspresi yang kuat.
        </Text>
      </View>
    );
  }
}
