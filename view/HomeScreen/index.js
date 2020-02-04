/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-paper';
import styles from './styles';

export default class Home extends Component {
  _onPress = () => {
    this.props.navigation.navigate('Materi');
  };
  _onPress2 = () => {
    this.props.navigation.navigate('Soal');
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={{marginTop: '5%'}}>
          <Text style={styles.textstyles}> Selamat Datang Farah</Text>
          <Text style={styles.textstyles2}>
            Yuk belajar seni lukis lebih dalam
          </Text>
        </View>
        <View style={styles.card1}>
          <Card style={styles.Image}>
            <Image
              source={require('../../assets/images/Frame4.png')}
              style={styles.Image}
            />
          </Card>
        </View>
        <View style={styles.border} />
        <View style={styles.textdirextion}>
          <Text style={styles.textstyles}>Bacaan Buat Kamu</Text>
          <Text style={styles.textstyles3} onPress={this._onPress}>
            Lihat Semua
          </Text>
        </View>
        <Text style={{marginLeft: '7%', marginTop: '-3%', fontSize: 15}}>
          Belajar Seni Lukis Lebih Mendalam
        </Text>
        <View
          style={{
            marginLeft: '6.5%',
            marginTop: '3%',
            height: 90,
            marginBottom: '-2%',
          }}>
          <ScrollView horizontal={true}>
            <Image
              source={require('../../assets/images/Frame6.png')}
              style={styles.image3}
            />
            <Image
              source={require('../../assets/images/Frame7.png')}
              style={styles.image3}
            />
            <Image
              source={require('../../assets/images/Frame8.png')}
              style={styles.image3}
            />
          </ScrollView>
        </View>
        <View style={styles.border} />
        <View style={styles.textdirextion}>
          <Text style={styles.textstyles}>Latihan Soal Yuk!</Text>
          <Text style={styles.textstyles4} onPress={this._onPress2}>
            Lihat Semua
          </Text>
        </View>
        <Text style={{marginLeft: '7%', marginTop: '-3%', fontSize: 15}}>
          Asah pengetahuanmu seputar seni lukis
        </Text>
        <View style={styles.card1}>
          <Card style={styles.Image}>
            <Image
              source={require('../../assets/images/Frame5.png')}
              style={styles.Image}
            />
          </Card>
        </View>
      </ScrollView>
    );
  }
}
