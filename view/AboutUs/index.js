/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Right,
  Button,
  Text,
  Icon,
  Left,
} from 'native-base';
import {View, Image, ScrollView} from 'react-native';
import styles from './styles';
export default class AboutUs extends Component {
  render() {
    return (
      <View>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Profil')}>
              <Icon style={{color: 'black'}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Tentang Aplikasi</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View>
            <Image
              source={require('../../assets/images/frame10.png')}
              resizeMode="contain"
              style={styles.frame}
            />
            <Image
              source={require('../../assets/images/frame11.png')}
              resizeMode="contain"
              style={styles.framee}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
